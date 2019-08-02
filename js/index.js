$(function() {
	AOS.init({
		useClassNames: true,
		initClassName: false,
		animatedClassName: 'animated',
	})

	$('#carouselWorks').carousel({
		interval: false,
	})

	$('.img-wrapper img').on('click', function() {
		var index = $(this).data('goTo')
		$('#carouselWorks').carousel(index)
		$('#modalWorks').modal('show')
	})

	$('#team-members').owlCarousel({
		autoplay: true,
		items: 3,
		smartSpeed: 700,
		loop: true,
		responsive: {
			0: {
				items: 2,
			},
			800: {
				items: 3,
			},
		},
	})
})
