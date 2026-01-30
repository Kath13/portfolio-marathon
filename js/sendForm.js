const forms = document.querySelectorAll('form');

const sendData = (form) => {
    const formData = new FormData(form);
    formData.append('form', form.classList.value);
    const body = {};
    formData.forEach((value, field) => {
        body[field] = value;
    });
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then(data => {
            console.log(data);
            alert('Данные отправлены успешно!');
        })
        .catch(err => {
            console.log(err.message);
            alert('Данные отправлены с ошибкой ' + err.message);
        })
        .finally(() => {
            form.reset()
        });
}

forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendData(form)
    })
})