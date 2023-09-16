const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

// FOR SINGLE PRODUCT PAGE
const MainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName('small-img');

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        MainImg.src = smallImg[i].src
    }
}