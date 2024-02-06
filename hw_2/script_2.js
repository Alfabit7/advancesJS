/**
 * Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 */
const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "1",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "1",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const containerEl = document.querySelector('.container');

for (let i = 0; i < initialData.length; i++) {
    const products = initialData[i];

    const productEl = document.createElement('div');
    const numberClass = i + 1;

    productEl.classList.add(`product`);
    productEl.classList.add(`product_${numberClass}`);
    containerEl.append(productEl);

    const reviewEl = document.createElement('div');
    reviewEl.classList.add('containerReview');

    const textAreaEl = document.createElement('textarea');
    textAreaEl.id = 'reviews';
    textAreaEl.classList.add('review');
    textAreaEl.type = 'textarea';
    textAreaEl.setAttribute('cols', "60");
    textAreaEl.setAttribute('rows', "7");


    const btnReviewsEl = document.createElement('button');
    btnReviewsEl.classList.add(`submit_${numberClass}`);
    btnReviewsEl.type = 'submit';
    btnReviewsEl.textContent = 'Оставить отзыв';
    btnReviewsEl.style.display = 'block';
    btnReviewsEl.style.height = '50px';

    productEl.insertAdjacentHTML('afterbegin', `<h2><b>Товар: ${products.product}</b></h2>\n`);

    products.reviews.forEach(itemProduct => {
        reviewEl.insertAdjacentHTML('beforeend', `<p> <b>ID: ${itemProduct.id}</b>  Отзывы: ${itemProduct.text}</p>\n\n`);
    });

    containerEl.appendChild(productEl);
    productEl.appendChild(reviewEl);
    productEl.appendChild(textAreaEl);
    productEl.appendChild(btnReviewsEl);
}

const textareaElements = document.querySelectorAll('.review');

textareaElements.forEach(el => {
    const btnSubmitReviewsEl = el.nextElementSibling;
    const containerReviewEl = el.previousElementSibling;

    btnSubmitReviewsEl.addEventListener('click', (e) => {
        let idReview = containerReviewEl.querySelectorAll('b').length
        idReview = idReview + 1;
        if (el.value.length > 20 || el.value.length < 10) {
            throw new Error('Отзыв меньше 30 символов или больше 500 ')
        }
        let userReview = `<p><b>ID: ${idReview} </b>${el.value}</p>`;
        containerReviewEl.insertAdjacentHTML('beforeend', userReview)
        el.value = '';
    });
});

