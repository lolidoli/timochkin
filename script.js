const header = document.querySelector('.header');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        header.classList.add('scrolled');
    } if (currentScrollPos < 50) {
        header.classList.remove('scrolled')
    }
}