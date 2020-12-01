$(function () {
	$('.first__screen-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.work__slider-inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.feedbacks__slider-inner').slick({
		slidesToShow: 2,
		arrows: false,
		slidesToScroll: 1,
		dots: true
	});

	$(".menu__btn").on('click', function () {
		$(".menu__list").slideToggle();
	});


});