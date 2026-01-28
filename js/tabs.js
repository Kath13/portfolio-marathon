const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
console.dir(tabImages);

tabButtons.forEach((tabButton, buttonIndex) => {
    tabButton.addEventListener('click', (event) => {
        tabButtons.forEach(btn => {
            if (btn === event.target) {
                event.target.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
        tabDescriptions.forEach((description, descriptionIndex) => {
            if (descriptionIndex === buttonIndex) {
                description.classList.remove('hidden');
            } else {
                description.classList.add('hidden');
            }
        })
        tabImages.forEach((image, imageIndex) => {
            if (imageIndex === buttonIndex) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        })
    })
})