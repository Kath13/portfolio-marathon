const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const data = event.target.dataset.tabsHandler;
        tabButtons.forEach(btn => {
            if (btn === event.target) {
                event.target.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
        changeContent(tabDescriptions, data)
        changeContent(tabImages, data)
    })
})