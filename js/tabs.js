const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

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
        tabDescriptions.forEach((description) => {
            if (description.dataset.tabsField === data) {
                description.classList.remove('hidden');
            } else {
                description.classList.add('hidden');
            }
        })
        tabImages.forEach((image) => {
            if (image.dataset.tabsField === data) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        })
    })
})