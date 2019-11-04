
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