$(document).ready(function () {
	$('.slider').bxSlider({
		mode: 'fade',
		captions: true,
		pager: false,
	});
});

$(document).ready(function () {
	jQuery('.bxslider-carousel-1').bxSlider({
		minSlides: 1,
		maxSlides: 8,
		slideWidth: 150,
		slideMargin: 10,
		ticker: true,
		speed: 50000,
	});
});
$(document).ready(function () {
	jQuery('.bxslider-carousel-2').bxSlider({
		minSlides: 1,
		maxSlides: 8,
		slideWidth: 150,
		slideMargin: 10,
		ticker: true,
		speed: 50000,
	});
});

$(window).scroll(function () {
	var position = $(window).scrollTop();
	var pos2 = Math.floor($('#counter').offset().top - 200);

	if (Math.floor(position) >= pos2) {
		$('.count').each(function () {
			$(this)
				.prop('Counter', 0)
				.animate(
					{
						Counter: $(this).data('value'),
					},
					{
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						},
					}
				);
		});
	}
});