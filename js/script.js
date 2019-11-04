
// MOBILE NAV
const mysitenav = document.querySelector('.site-header .site-nav');
const mymenubutton = document.querySelector('.menu-button');

mymenubutton.onclick = function () {
    mysitenav.classList.toggle('active');
}

// REMOVE ACTIVE WHEN USER CLICK ON OVERLAY NAV LINKS
cont = mysitenavlinks = document.querySelectorAll('.site-header .site-nav a');
for (var i = 0, len = mysitenavlinks.length; i < len; i++) {
    mysitenavlinks[i].onclick = function () {
        mysitenav.classList.remove('active');
    };
};


/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */


$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });