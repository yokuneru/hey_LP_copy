$(function(){
  'use strict';


  $(window).on('load scroll' , function() {
    var message = $('#message').offset();

    if ($(this).scrollTop() > message.top) {
      $('.header-logo-link').css('display', 'block');
      $('header').stop().animate({
        backgroundColor: '#fff'
      }, 150);
    } else {
      $('.header-logo-link').css('display', 'none');
      $('header').stop().animate({
        backgroundColor: 'transparent'
      }, 150);
    }
  });

  $('.menu-btn').on('click' , function() {
    $('#menu-nav').toggleClass('hide-nav');
    console.log('open');
  });


});
