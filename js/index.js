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
})
