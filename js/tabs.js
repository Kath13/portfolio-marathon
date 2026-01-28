const tabButtons = document.querySelectorAll('.design-list__item');

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        tabButtons.forEach(btn => {
            if (btn === event.target) {
                event.target.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active')
            }
        });
    })
})