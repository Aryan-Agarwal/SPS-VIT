$(function(){
	var $slider = $('.slider')
	var $slides = $slider.find('.slides');
	var $slide = $slides.find('.slide');
	var pause = 2500;
	var CurrentSlide= 1;
	var interval; 
	
	function startSlider(){
		interval = setInterval(function(){
			$slides.animate({ 'margin-left' : '-=400px'} ,1000, function (){
				CurrentSlide++;
				if(CurrentSlide== $slide.length) {
					CurrentSlide=1;
					$slides.css( 'margin-left', 0);
				}
			});
		} , pause);
	}
	
	function stopSlider(){
		clearInterval(interval);
	}
	
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	
	startSlider();
});