const data = [
  {
    id: 1,
    name: "Ноутбук HP",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2805_0_1.webp",
    price: 50000,
    oldprice: 65000,
    description: "Качественные ноутбуки,",
    colors: ["черный", "серый", "серебристый"],
    sizes: ["S", "M", "L"],
    memory: ["64GB", "128GB", "256GB"],
  },
  {
    id: 2,
    name: "Умные Часы",
    img: "https://www.gadget.kg/upload/catalog/57/item_5606/c304d87293fa349f0f877ee08b44bd05.jpg",
    price: 15000,
    oldprice: 20000,
    description: "Новые, умные",
    colors: ["черный", "белый", "серый"],
    sizes: ["S", "M", "L"],
    memory: ["64GB", "128GB", "256GB"],
  },
  {
    id: 3,
    name: "Кросовки Nike",
    img: "https://inter-sport.s3.amazonaws.com/products/DV3853/black_001/DV3853-1_resized_400X400.png",
    price: 10000,
    oldprice: 5000,
    description: "Стильные, удобные, летние",
    colors: ["черный", "белый", "красный"],
    sizes: [38, 39, 40, 41, 42, 43],
    memory: ["64GB", "128GB", "256GB"],
  },
  {
    id: 4,
    name: "Apple 11",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-nVOPwhg4aHBnvs9SSzM3ow2cBa7f4QwZG2zNOdjxMaPorYRoicw4yQ&s=10",
    price: 15000,
    oldprice: 20000,
    description: "Мощный и стильный смартфон",
    colors: ["черный", "белый", "красный"],
    sizes: ["S", "M", "L"],
    memory: ["64GB", "128GB", "256GB"],
  },
  {
    id: 5,
    name: "Кепки BOSS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiD9S-tO7c0H1yPPbgjO1WgyqAtyxoajn0cyxNXSKMoeoUnJCi7OLw_Qq&s=10",
    price: 5000,
    oldprice: 15000,
    description: "Удобные и стильные кепки",
    colors: ["черный", "белый", "синий"],
    sizes: ["S", "M", "L"],
    memory: ["64GB", "128GB", "256GB"],
  },
  {
    id: 6,
    name: "Сумки для ноутбука",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcN7qSH6EFtTLcWX4-T8EPm7BOEIXP3ubN87lHNnu5g&s=10",
    price: 2500,
    oldprice: 5000,
    description: "Легкие, стильные",
    colors: ["черный", "серый"],
    sizes: ["13", "15", "17"],
    memory: ["64GB", "128GB", "256GB"],
  },
];


const div = document.querySelector('#h6')

data.forEach((item) => {
  const div3 = document.createElement('div')
  div3.innerHTML = `
   <img src="${item.img}" alt="">
   <h1>${item.name}</h1>
   <h1>${item.price}</h1>
   <h1>${item.oldprice}</h1>
   <h1>${item.description}</h1>
  <p>${item.colors.map((item2) => item2).join(", ")}<p/>
  <p>${item.sizes.map((item2) => item2). join(",")}<p/>
  <p>${item.memory.map((item2) => item2).join(",")}<p/>
  <button class="buy">Купить</button>
  ` 
   div.appendChild(div3)
})

