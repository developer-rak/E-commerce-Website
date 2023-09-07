const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}