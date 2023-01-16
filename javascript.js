let upBtn = document.querySelector('.up-button');

window.onscroll = function () {
if (window.pageYOffset > 150) {
    upBtn.classList.add('show');
    } else {
    upBtn.classList.remove('show');
    }
};

upBtn.onclick = function () {
    window.scrollTo(0,0);
};