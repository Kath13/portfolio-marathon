const scrollMenuLinks = document.querySelectorAll('.menu-list__link');
const mainButton = document.querySelector('.main__button');
[...scrollMenuLinks, mainButton].forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
            // target.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'
            // });
            seamless.scrollIntoView(target, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})