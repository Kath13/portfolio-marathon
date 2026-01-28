const moreBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modalOverlay = modal?.querySelector('.overlay');

const showModal = () => modal.classList.remove('hidden')
const hideModal = () => modal.classList.add('hidden')

moreBtns.forEach(moreBtn =>
        moreBtn.addEventListener('click', showModal)
);
[modalCloseBtn, modalOverlay]
    .forEach(elem => elem.addEventListener('click', hideModal));

