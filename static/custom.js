$(document).ready(function() {
	
	// Плавная прокрутка по якорю --v.1
	$('nav a').on('click', function(event) {
		$('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
		event.preventDefault();
	});

	// Кнопки прокрутки страницы вверх
	let scrollTop_btn = $('#scroll_top');
	$(window).scroll(function() {
		if($(window).scrollTop() > 50) {
			scrollTop_btn.css('display', 'flex');
		}
		else {
			scrollTop_btn.hide();
		}
	});
	scrollTop_btn.click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});

});