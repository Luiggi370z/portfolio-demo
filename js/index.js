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

	$('#customers-testimonials').owlCarousel({
		autoplay: true,
		items: 1,
		smartSpeed: 700,
		loop: true,
	})

	$('.counter').counterUp({
		delay: 10,
		time: 2000,
	})

	$('#clients-list').owlCarousel({
		autoplay: true,
		items: 6,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() < 50) {
			$('nav').removeClass('vesco-top-nav')
			$('#back-to-top').fadeOut()
		} else {
			$('nav').addClass('vesco-top-nav')
			$('#back-to-top').fadeIn()
		}
	})

	$('a.nav-link, a.smooth-scroll').click(function(event) {
		event.preventDefault()

		var section = $(this).attr('href')

		$('html, body').animate(
			{
				scrollTop: $(section).offset().top - 64,
			},
			1250,
			'easeInOutExpo',
		)
	})
})
