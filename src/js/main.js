document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM structured');

	$(document).find('.calculator-img-main-folder').eq(0).css('opacity', 1);
	$(document).find('.calculator-img-main-building').eq(1).css('opacity', 1);

	$(document).ready(function() {
		$('.calculator-range-input-1').ionRangeSlider({
				skin: "round",
				hide_min_max: true,
				hide_from_to: true,
				min: 1,
				max: 1000,
				from: 1,
		});
		$('.calculator-range-input-2').ionRangeSlider({
				skin: "round",
				hide_min_max: true,
				hide_from_to: true,
				min: 1,
				max: 1000,
				from: 49,
		});
		$('.calculator-range-input-3').ionRangeSlider({
				skin: "round",
				hide_min_max: true,
				hide_from_to: true,
				min: 1,
				max: 1000,
				from: 100,
		});

		$(document).on('change', '.calculator-range-input-1', function() {
			let temp = $(this).val();
			let i;
			
			$('.calculator-description-text__count--1').text(temp);
			$('.calculator-img-main-folder').each(function(){
				$(this).css('opacity', 0);
			})
			temp = Math.round(temp / 100);
			if (temp === 0) {
				temp = 1;
			}
			for (i = 0; i <= (temp - 1); i++) {
				$('.calculator-img-main-folder').eq(i).css('opacity', 1);
			}
		});
		$(document).on('change', '.calculator-range-input-2', function() {
			let temp = $(this).val();
			let tempCount = $('.calculator-img-main-building').length;
			$('.calculator-description-text__count--2').text(temp);

			$('.calculator-img-main-building').each(function() {
				$(this).css('opacity', 0);
			});

			if (temp > 50 && temp <= 150) {

				$('.calculator-img-main-building').eq(0).css('opacity', 1);
				$('.calculator-img-main-building').eq(1).css('opacity', 1);
			}

			if (temp <= 50) {
				$('.calculator-img-main-building').eq(1).css('opacity', 1);
			}

			if (temp > 150) {
				$('.calculator-img-main-building').eq(1).css('opacity', 1);
				$('.calculator-img-main-building').eq(2).css('opacity', 1);
				$('.calculator-img-main-building').eq(0).css('opacity', 1);
			}
		});
		$(document).on('change', '.calculator-range-input-3', function() {
			let temp = $(this).val();
			$('.calculator-description-text__count--3').text(temp);

			$('.calculator-img-main-inner-3 ellipse').attr('ry', `${(temp / 13) + 70}`);

		});

		$(document).on('change', '.calculator-footer-checkbox input', function() {
			let checkbox = this;
			console.log(checkbox);
			console.log(checkbox.checked);
			if (checkbox.checked) {
				$(this).closest('.calculator-footer-checkbox').addClass('active');
				return false;
			} else {
				$(this).closest('.calculator-footer-checkbox').removeClass('active');
				return false;
			}
		})
	})
})