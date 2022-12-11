import resto from '../DATA.json';

console.log(resto);

const restaurantList = resto => {
    const restaurantElement = document.querySelector('#box');
    restaurantElement.innerHTML = '';
    resto.forEach(restaurant => {
        const { name, description, pictureId, rating } = restaurant;
        const Listrestaurant = document.createElement('div')

        Listrestaurant.innerHTML = `
        <div class="box-item">
        <img src="${pictureId}" alt="gambar restaurant">
        <p tabindex="0">${rating}</p>
        <h1><a href="#">${name}</a></h1>
        <p class="description">${description}</p></div>
        `;

        restaurantElement.appendChild(Listrestaurant);
    });
}

restaurantList(resto.restaurants);