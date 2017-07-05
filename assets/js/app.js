'use strict';

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['', '']
	});

	$('.owl-carousel-feedback').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['', '']
	});

	//Плавный скролл к якорю
	$(document).on('click', 'a', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 500);
	});

	//Боковые кнопки input[type=number]
	$('.up-btn').on('click', function (e) {
		var cnt = $(this).siblings('input').val();
		cnt++;
		$(this).siblings('input').val(cnt);
	});

	$('.down-btn').on('click', function (e) {
		var cnt = $(this).siblings('input').val();
		cnt--;
		if (cnt < 0) {
			cnt = 0;
		}
		$(this).siblings('input').val(cnt);
	});

	closeModal();
	toggleNavBtn();
});

function showFeedbackModal() {
	$('#feedback-modal').toggle();
}

function showOrderModal() {
	$('#order-modal').toggle();
}

function showCallBackModal() {
	$('#order-modal').toggle();
}

function closeModal() {
	$('.close-cross').on('click', function () {
		$(this).closest('.modal').hide();
	});
}

function toggleNavBtn() {
	if ($(window).width() < 691) {
		$('.navbar-toggle').show();
		$('.header__nav').hide();
	} else {
		$('.navbar-toggle').hide();
		$('.header__nav').show();
	}

	$('.navbar-toggle').on('click', function () {
		$('.header__nav').toggle();
	});

	$(window).on('resize', function (e) {
		if ($(this).width() < 691) {
			$('.navbar-toggle').show();
			$('.header__nav').hide();
		} else {
			$('.navbar-toggle').hide();
			$('.header__nav').show();
		}
	});
}