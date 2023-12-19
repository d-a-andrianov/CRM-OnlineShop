'use strict';

// // ф-ия createRow создает строку с ячейкой внутри (таблицу) на основе объекта
// function createRow(obj) {
//   // создаем строку <tr>
//   const row = document.createElement('tr');
//   // перебираем объект и создаем ячейки <td> для каждого элемента
//   for (let elem in obj) {
//     // создаем элемент <td>
//     const cell = document.createElement('td');
//     // добавляем данные elem из объекта obj в ячейку
//     cell.textContent = obj[elem];
//     // добавляем ячейку в конец строки
//     row.appendChild(cell);
//   }
//   // Возвращаем созданную строку
//   return row;
// }

// // ф-ия renderGoods добавляет строки в таблицу на основе массива объектов
// function renderGoods(arr) {
//   // получаем таблицу
//   const table = document.querySelector('.cms__table');
//   //? Если сделать remove то удаляет всё, а так криво все данные встают, под таблицу
//   // table.remove()
//   // перебираем объекты из массива и создаем строки с помощью ф-ии createRow
//   for (let i = 0; i < arr.length; i++) {
//     // создаем строку на основе массива
//     let row = createRow(arr[i]);
//     // добавляем строку в конец таблицы
//     table.appendChild(row);
//   }
// }

// const goods = [
//   {
//     "id": 253842678,
//     "title": "Смартфон Xiaomi 11T 8/128GB",
//     "price": 27000,
//     "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
//     "category": "mobile-phone",
//     "discont": false,
//     "count": 3,
//     "units": "шт",
//     "images": {
//       "small": "img/smrtxiaomi11t-m.jpg",
//       "big": "img/smrtxiaomi11t-b.jpg"
//     }
//   },
//   {
//     "id": 296378448,
//     "title": "Радиоуправляемый автомобиль Cheetan",
//     "price": 4000,
//     "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
//     "category": "toys",
//     "discont": 5,
//     "count": 1,
//     "units": "шт",
//     "images": {
//       "small": "img/cheetancar-m.jpg",
//       "big": "img/cheetancar-b.jpg"
//     }
//   },
//   {
//     "id": 215796548,
//     "title": "ТВ приставка MECOOL KI",
//     "price": 12400,
//     "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
//     "category": "tv-box",
//     "discont": 15,
//     "count": 4,
//     "units": "шт",
//     "images": {
//       "small": "img/tvboxmecool-m.jpg",
//       "big": "img/tvboxmecool-b.jpg"
//     }
//   },
//   {
//     "id": 246258248,
//     "title": "Витая пара PROConnect 01-0043-3-25",
//     "price": 22,
//     "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
//     "category": "cables",
//     "discont": false,
//     "count": 420,
//     "units": "v",
//     "images": {
//       "small": "img/lan_proconnect43-3-25.jpg",
//       "big": "img/lan_proconnect43-3-25-b.jpg"
//     }
//   }
// ];
// renderGoods(goods);


// 
{
  const createRow = ({ id, title, category, units, count, price, allPrice }) => {
    const tr = document.createElement('tr');
    tr.classList.add('cms__table-tbody-line');
    tr.insertAdjacentHTML('afterbegin', `
    <td class='cms__table-column-id'>${id}</td>
    <td class='cms__table-column-name'>${title}</td>
    <td class='cms__table-column-category'>${category}</td>
    <td class='cms__table-column-units'>${units}</td>
    <td class='cms__table-column-amount'>${count}</td>
    <td class='cms__table-column-price'>$${price}</td>
    <td class='cms__table-column-total'>$${price * count}</td>
    <td class='cms__table-tbody-icons'>
      <button class='cms__table-tbody-button' aria-label="image"></button>
      <button class='cms__table-tbody-button' aria-label="edit"></button>
      <button class='cms__table-tbody-button' aria-label="delete"></button>
    </td>
  `);
    return tr;
  };

  const renderGoods = (elem, data) => {
    const table = document.querySelector('.cms__table')
    // перебираем массив goods с помощью метода map используя ф-ию createRow
    const allRow = goods.map(createRow);
    // загружаем в table то что получилось (создаем строки allRow)
    table.append(...allRow);
  };

  const goods = [
    {
      "id": 253842678,
      "title": "Смартфон Xiaomi 11T 8/128GB",
      "price": 27000,
      "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
      "category": "mobile-phone",
      "discont": false,
      "count": 3,
      "units": "шт",
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      }
    },
    {
      "id": 296378448,
      "title": "Радиоуправляемый автомобиль Cheetan",
      "price": 4000,
      "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
      "category": "toys",
      "discont": 5,
      "count": 1,
      "units": "шт",
      "images": {
        "small": "img/cheetancar-m.jpg",
        "big": "img/cheetancar-b.jpg"
      }
    },
    {
      "id": 215796548,
      "title": "ТВ приставка MECOOL KI",
      "price": 12400,
      "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
      "category": "tv-box",
      "discont": 15,
      "count": 4,
      "units": "шт",
      "images": {
        "small": "img/tvboxmecool-m.jpg",
        "big": "img/tvboxmecool-b.jpg"
      }
    },
    {
      "id": 246258248,
      "title": "Витая пара PROConnect 01-0043-3-25",
      "price": 22,
      "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
      "category": "cables",
      "discont": false,
      "count": 420,
      "units": "v",
      "images": {
        "small": "img/lan_proconnect43-3-25.jpg",
        "big": "img/lan_proconnect43-3-25-b.jpg"
      }
    }
  ];
  renderGoods(goods);
}
// 