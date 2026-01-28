let tabButtons = document.querySelectorAll('.design-list__item');

tabButtons.forEach((tabButton, index) => {
    // так можно навесить только одну функцию
    // tabButton.onclick = () => {
    //     console.log('click')
    // }

    // так можно навесить несколько функций
    tabButton.addEventListener('click', (e) => {
        console.log('click1')
    })
    tabButton.addEventListener('click', (e) => {
        console.log('click2')
    })
    console.dir(tabButton)
})