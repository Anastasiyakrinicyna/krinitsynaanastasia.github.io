document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header-nav');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
});