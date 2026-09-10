// let gg=document.querySelector("h1")
// gg.style.color="blue"
// gg.style.fontSize="50px"
// let nn=document.querySelector("img")
// nn.style.width="195px"
// let tt=document.querySelector("button")
// tt.style.backgroundColor="red"
// tt.style.border="none"
// tt.style.borderRadius="4px"
// tt.style.width="200px"
// tt.style.height="20px"
// tt.style.color="white"
// let hh=document.querySelector("div")
// hh.style.border="solid 2px red"
// hh.style.width="200px"
// hh.style.height="345px"
// hh.style.borderRadius="8px"
// hh.style.backgroundColor="red"


// DOM document object module

const data = [
  {
    id: 1,
    name: "Беспроводные наушники AirPods Pro",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    price: 12900,
    oldPrice: 15900,
    discount: 19,
    sale: true,
    description: "Качественные беспроводные наушники с шумоподавлением и отличным звуком."
  },
  {
    id: 2,
    name: "Умные часы Smart Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 7490,
    oldPrice: 9900,
    discount: 24,
    sale: true,
    description: "Стильные умные часы с мониторингом активности, уведомлениями и контролем сна."
  },
  {
    id: 3,
    name: "Кроссовки Nike Air",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: 8990,
    oldPrice: 11990,
    discount: 25,
    sale: true,
    description: "Удобные спортивные кроссовки для повседневной носки и тренировок."
  },
  {
    id: 4,
    name: "Рюкзак Urban",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    price: 4590,
    oldPrice: 5990,
    discount: 23,
    sale: true,
    description: "Вместительный городской рюкзак с отделением для ноутбука и удобными карманами."
  },
  {
    id: 5,
    name: "Смартфон Galaxy S24",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: 52990,
    oldPrice: 59990,
    discount: 12,
    sale: true,
    description: "Современный смартфон с ярким экраном, мощным процессором и качественной камерой."
  },
  {
    id: 6,
    name: "Кожаная сумка Classic",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    price: 6490,
    oldPrice: 7990,
    discount: 19,
    sale: true,
    description: "Элегантная кожаная сумка в классическом стиле для работы и повседневного использования."
  }
];
const div = document.querySelector('#h2')

data.forEach((item) => {
  const div3 = document.createElement('div')
  div3.innerHTML = `
  <img src="${item.image}" alt="">
  <h1>${item.name}</h1>
  <h1>${item.price}</h1>
  <h1>${item.oldPrice}</h1>
  <h1>${item.sale}</h1>
  <h1>${item.description}</h1>
  `
 div.appendChild(div3)
})
