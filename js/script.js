const menuTogle = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.links');

menuTogle.addEventListener('click', function() {
    nav.classList.toggle('slide')
});