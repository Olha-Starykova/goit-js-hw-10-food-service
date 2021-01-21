 import menuJson from './menu.json';
import itemsTemplate from './templating/templates.hbs';
import './theme.js';
import './styles.css';


let menu = document.querySelector('.js-menu');

function markupMenu(array) {
    const markup = array.map(el => itemsTemplate(el)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

markupMenu(menuJson);

/**Шаблонизация
Используя шаблонизатор Handlebars создай шаблон одного элемента меню.
После чего, используя шаблон, создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js-menu.
Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.
Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для каждого объекта) */


/**"id": "XWaQXcbk0",
"name": "Картофель, запеченный в мундире",
"description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень
простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни
времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или
сладкий красный перец.",
"image": "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
"price": 100,
"ingredients": [
"Картофель",
"Чеснок",
"Сметана",
"Бекон",
"Твердый сыр",
"Зеленый лук"
]
*/