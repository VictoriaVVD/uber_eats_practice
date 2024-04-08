const data = [
    {
        name: "Макдоналдс — Газетный",
        src: "./img/eat_4.png",
        kitchen: "₽₽ • Бургеры",
        delivery_time: "25 - 35 мин",
    },
    {
        name: "DimSum & Co — ЦДМ",
        src: "./img/eat_8.png",
        kitchen: "₽ • Японская • Китайская • Азиатская",
        delivery_time: "40 - 50 мин",
    },
    {
        name: "ДвижОК — Манежная",
        src: "./img/eat_9.png",
        kitchen: "₽ • Американская • Европейская",
        delivery_time: "35 - 45 мин",
    },
    {
        name: "НЯ — NHA",
        src: "./img/eat_7.png",
        kitchen: "₽₽ • Вьетнамская",
        delivery_time: "30 - 40 мин",
    },
    {
        name: "Точка Дзы — Цветной",
        src: "./img/eat_6.png",
        kitchen: "₽₽ • Вьетнамская",
        delivery_time: "40 - 50 мин",
    },
    {
        name: "Cinnabon",
        src: "./img/eat_5.png",
        kitchen: "₽ • Выпечка • Десерты • Капкейки",
        delivery_time: "25 - 35 мин",
    },
    {
        name: "PIZZELOVE",
        src: "./img/eat_3.png",
        kitchen: "₽₽ • Пицца",
        delivery_time: "15 - 25 мин",
    },
    {
        name: "Zю кафе — Тверская",
        src: "./img/eat_2.png",
        kitchen: "₽₽ • Японская",
        delivery_time: "25 - 35 мин",
    },
    {
        name: "Bar BQ Cafe — Манежная",
        src: "./img/eat_1.png",
        kitchen: "₽₽₽ • Европейская",
        delivery_time: "30 - 40 мин",
    },  
];
const container = document.querySelector("main__container");
const cardList = document.getElementById("main__cardlist");
const createCard = (el) => {
    return `
        <div class="card col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <img src=${el.src} alt=${el.name} class="card__image" />
            <h2 class="card__heading">${el.name}</h2>
            <p class="card__info">${el.kitchen}</p>
            <p class="card__delivery">${el.delivery_time}</p>
        </div>
    `
}
function generateCards() {
    cardList.innerHTML = "";
    data.map(item => {
        cardList.innerHTML += createCard(item)
    })
}
generateCards();