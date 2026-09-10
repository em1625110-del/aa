const container = document.querySelector('.container')

const API = 'https://67d0143b823da0212a8480e9.mockapi.io/cakes'

fetch(API)
.then(response => response.json())
.then(data =>(
    data.forEach(item =>{
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${item.image}" alt="">
        <h1>${item.title}</h1>
        <h1>${item.price}</h1>
        <h1>${item.category}</h1>
        <button>карзина</button>
        `
        container.appendChild(div)
    })
))