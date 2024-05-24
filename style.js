document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbarList');
    const menu = document.getElementById('navbarHidden');

    nav.addEventListener('click', function() {
        menu.classList.toggle('navbar');
    });
});