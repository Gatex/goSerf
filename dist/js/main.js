$(function() {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
		asNavFor: '.slider-dots',
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		focusOnSelect: true,
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
		centerMode: true,
		asNavFor: '.surf-map',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1081,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 721,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 651,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	$('.surf-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 721,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 651,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
	});


	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});	

	$('.quantity-button').on('click', function(){
		let summ = $('.input-nights').val() * $('.summ').data('nights') + ($('.input-guests').val() - 1) * $('.summ').data('guests');
		$('.summ').html('$' + summ);
	});

	let summ = $('.input-nights').val() * $('.summ').data('nights') + ($('.input-guests').val() - 1) * $('.summ').data('guests');
	$('.summ').html('$' + summ);

	$('.surfboard-box__circle').on('click', function(){
		$(this).toggleClass('active')
	});
	$('.menu__burger-btn').on('click', function(){
		$('.menu').toggleClass('active')
	});
	$('.menu__burger-btn').on('click', function(){
		$('.menu__burger-btn').toggleClass('active')
	});

 new WOW().init();
 
});