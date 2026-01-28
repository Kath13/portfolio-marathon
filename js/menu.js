const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu-list__item');

const toggleMenu = () => menu.classList.toggle('menu-active');
const hideMenu = () => menu.classList.remove('menu-active');;

burger.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});
document.addEventListener('click', (e) => {
    if (!(e.target.closest('.menu') || e.target.closest('.humburger-menu'))) {
        hideMenu();
    }
})
