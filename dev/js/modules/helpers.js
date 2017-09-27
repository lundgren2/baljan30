
(function ($) {

  "use strict"
  // Show/Hide header when scoll + Controll classes
  var init = { previousTop: 0 }

  $(window).scroll(init, function () {
    var menuContainer = '.navbar';
    var body = $('body');
    var currentTop = $(window).scrollTop();

    if ( currentTop > 120  ) {
      $(menuContainer).addClass('fixed');
      $(body).addClass('fixed-navbar');
    } else if ( currentTop <= 100 ) { //56
      $(menuContainer).removeClass('fixed');
      $(body).removeClass('fixed-navbar');
    }

    var startFade = 800;

    init.previousTop = currentTop;
  });

  $('#page-wrapper a[target="_blank"]').addClass('external-link');


  })(jQuery);


$(document).ready(function () {

    // Variable definitions
    $body = $('html, body');
    $window = $(window);

    bindings();
});
