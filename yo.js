const container = document.querySelector('.container')



const API = 'https://67d0143b823da0212a8480e9.mockapi.io/list'

async function getData() {
    try{
        const response = await fetch(API);
        const data = await response.json();
        data.forEach(item => {
        const div = document.createElement('div')

        div.innerHTML = `
        <img
            src="${item.image || 'default-image.png'}"
            ait="${item.title || 'cake'}"
        >

        <h1>${item.title || 'Без названия'}</h1>

        <h1>${item.price || 'Цена не указана'}</h1>

        <h1>${item.category || 'Категория не указана'}</h1>

        <button>карзина</button>
        `
        container.appendChild(div)
   })
    } catch (e){
        console.log(e ,'Ошибка')
    }

}
getData()



const container2 = document.querySelector('.container2')

const AP2I = 'https://67d0143b823da0212a8480e9.mockapi.io/cakes'

async function getData() {
    try{
        const response = await fetch(API);
        const data = await response.json();
        data.forEach(item => {
        const div = document.createElement('div')

        div.innerHTML = `
        <img
            src="${item.image || 'default-image.png'}"
            ait="${item.title || 'cake'}"
        >

        <h1>${item.title || 'Без названия'}</h1>

        <h1>${item.price || 'Цена не указана'}</h1>

        <h1>${item.category || 'Категория не указана'}</h1>

        <button>карзина</button>
        `
        container.appendChild(div)
    })
     }catch (e){
        console.log(e, 'Ошибка')
     }
}
    getData()
        