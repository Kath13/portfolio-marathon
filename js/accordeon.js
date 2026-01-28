const accordeon = document.querySelector('.feature-list');
const accordeonBtns = accordeon.querySelectorAll('.feature__link');

const inactivateTitle = (elem) => elem.classList.remove('feature__link_active');
const hideContent = (elem) => elem.nextElementSibling.classList.add('hidden');
const toggleTitle = (elem) => elem.classList.toggle('feature__link_active');
const toggleContent = (elem) => elem.nextElementSibling.classList.toggle('hidden');

accordeonBtns.forEach(clicked => {
    clicked.addEventListener('click', (e) => {
        accordeonBtns.forEach(other => {
            if (other === clicked) {
                toggleTitle(clicked);
                toggleContent(clicked);
            } else {
                inactivateTitle(other);
                hideContent(other);
            }
        });
    })
})