$(function(){
  'use strict';
  // var mainvisualH = $('.mainvisual-img').height();
  var mainvisualH = $('.mainvisual-wrapper').height();

  $(window).on('load scroll' , function() {
    if ($(this).scrollTop() > mainvisualH) {
      $('.header-logo-img').css('visibility', 'visible');
      $('header').stop().animate({
        backgroundColor: '#fff'
      }, 150);
    } else {
      $('.header-logo-img').css('visibility', 'hidden');
      $('header').stop().animate({
        backgroundColor: 'transparent'
      }, 150);
    }
  });

});
