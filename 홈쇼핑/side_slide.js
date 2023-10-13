var $j = jQuery.noConflict();
var $slider = $j('.slideshow .slider'),
  maxItems = $j('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $j('.slideshow').clone().addClass('slideshow-right').appendTo($j('.split-slideshow'));

rightItems = $j('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$j('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $j(reverseItems[i]).appendTo($j('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');

$j(document).ready(function() {
  $j('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $j('.slideshow-right .slider').slick('slickGoTo', -1);
    $j('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $j('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $j('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $j('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $j('.slideshow-text').slick('slickGoTo', nextSlide);
  }
}).on("mousewheel", function(event) {
  event.preventDefault();
  if (event.deltaX > 0 || event.deltaY < 0) {
    $j(this).slick('slickNext');
  } else if (event.deltaX < 0 || event.deltaY > 0) {
    $j(this).slick('slickPrev');
  };
}).on('mousedown touchstart', function(){
  dragging = true;
  tracking = $j('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[5]);
  rightTracking = $j('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function(){
  if (dragging) {
    newTracking = $j('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $j('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
  }
}).on('mouseleave touchend mouseup', function(){
  dragging = false;
});
});

$j(document).ready(function() {
  $j('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
});
$j(document).ready(function() {
  $j('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
});

