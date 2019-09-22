/*****For Sticky Navigation */

$(document).ready(function () {

  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  /*****Scroll on Buttons****/
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);
  });
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });

/****************Smooth Scrolling from top links */
/***used CCS */

/***animation on scroll */
$('.js--wp-1').waypoint(function(direction) { 
    $('.js--wp-1').addClass('animated fadeIn');
},  {
  offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) { 
  $('.js--wp-2').addClass('animated fadeInUp');
},  {
offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) { 
  $('.js--wp-3').addClass('animated fadeIn');
},  {
offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) { 
  $('.js--wp-4').addClass('animated pulse');
},  {
offset: '50%'
});

/***mobile-navigation****/
$('.js--nav-icon').click(function() {
var nav = $('.js--main-nav')
var icon = $('js--nav-icon ion-icon')
nav.slideToggle(200);


});


});