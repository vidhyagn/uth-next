// Slider

$('.thumb-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false
});


$(document).ready(function(){    

  // Menu Toggle	
  
  $(".hamburger").click(function(){
      $(this).closest('.nav-right').find(".menu-wrapper").addClass('fly-in');
  });
  $(".close-fly").click(function(){
    $(this).closest('.menu-wrapper').removeClass('fly-in');
  });


  // Back to top

  $('.wrapper').scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function () {
    $('body,html, .wrapper').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

});