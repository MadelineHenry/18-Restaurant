
let cards= [{
    name: 'Saumon',
    ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish. ',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1562158074-1602c2f19a08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=805",
    badge: 'sashimi'
}, {
    name: 'Saumon Epicé',
    ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki thon rouge,6 maki thon, 6 california roll. 6 rainbow poulet, 6 california roll thon, 6 california roll , 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1563612116891-9b03e4bb9318?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80",
    badge: 'california'
}, {
    name: 'Saumon Paprika',
    ingredients: '2 sushi thon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1592180224739-5662b2d03035?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    badge: 'futomaki'
}, {
    name: 'California',
    ingredients: '3 sushi thon, 3 sushi saumon, 3 sushi dorade,3 sushi king fish, 3 sushi crevette, 6 sashimi de saumon, 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1607246749173-7e1b6d9b25ba?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    badge: 'maki'
}, {
    name: 'Tuna',
    ingredients: '2 sushi crevette, 2 sashimi crevette, 1 temaki crevette,6 maki crevette, 6 california roll crevette list item.6 rainbow poulet, 6 california roll thon, 6 california roll crevette, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1576817228310-3bfdf2689f58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    badge: 'maki'
}, {
    name: 'Thai Shrimp',
    ingredients: '2 sushi crevette, 2 sashimi crevette, 1 temaki crevette,6 maki crevette, 6 california roll crevette list item. 6 rainbow poulet, 6 california roll thon, 6 california roll crevette, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1500040760498-8be2dccbdea7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    badge: 'sashimi'
}, {
    name: 'Chicken',
    ingredients: '2 sushi poulet, 2 sashimi poulet, 1 temaki poulet,6 maki poulet, 6 california roll poulet list item. 6 rainbow poulet, 6 california roll thon, 6 california roll poulet, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1593766290104-280955f806fb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
}, {
    name: 'Shiso Tuna',
    ingredients: '2 sushi thon, 2 sashimi thon, 1 temaki thon,6 maki thon, 6 california roll thon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll thon, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1599570340442-844ea773ef96?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    badge: 'california'
}, {
    name: 'Shiso Chicken',
    ingredients: '2 sushi thon rouge, 2 sashimi thon rouge, 1 temaki thon rouge,6 maki thon rouge, 6 california roll thon rouge list item. 6 rainbow poulet, 6 california roll thon, 6 california roll thon rouge, 8 masago roll scampis, 8 rainbow king fish.',
    price: 6.50,
    image: "https://images.unsplash.com/photo-1558540718-b2303795e6e8?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
}]
let cardContainer;

//CREATE CARDS


let createCard = (task) => {

let card = document.createElement('div');
card.classList.add('card', 'store-item', task.badge);
card.setAttribute('data-item', task.badge)
let img_container = document.createElement('div');
img_container.className = 'img-container'

let card_img = document.createElement('img')
card_img.className = 'img_card'
card_img.src = task.image

let cardBody = document.createElement('div');
cardBody.classList.add('card-body', 'overlay');

let item_name = document.createElement('h5');
item_name.innerText = task.name;
item_name.className = 'card-title';
item_name.dataset.name = task.name

let detail = document.createElement('p');
detail.innerText = task.ingredients;
detail.className = 'card-text';

let price = document.createElement('div');
price.className = 'price'
price.innerHTML = task.price.toFixed(2) + '€'



cardBody.appendChild(item_name);
cardBody.appendChild(detail);
cardBody.appendChild(price)
card.appendChild(card_img)
card.appendChild(cardBody);
cardContainer.appendChild(card);


}

let ListOfCards = () => {
if (cardContainer) {
    document.querySelector('.card-container').replaceWith(cardContainer);
    return;
}

cardContainer = document.querySelector('.card-container');
cards.forEach((element) => {
    createCard(element);
});
};

ListOfCards();


(function () {
const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.store-item')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        //prevent the default link jump to top of page
        e.preventDefault()
        // grab the filter button that was clicked
        const filter = e.target.dataset.filter
        if (filter === 'all') {
            //  show all items
            storeItems.forEach(function (item) {
                item.style.display = 'block'
            })
        } else if (filter === 'maki') {
            storeItems.forEach(function (item) {
                if (item.classList.contains('maki')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'futomaki') {
            storeItems.forEach(function (item) {
                if (item.classList.contains('futomaki')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'california') {
            storeItems.forEach(function (item) {
                if (item.classList.contains('california')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'sashimi') {
            storeItems.forEach(function (item) {
                if (item.classList.contains('sashimi')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        }
    })
})
})();

const searchIcon = document.querySelector('#search-icon')
const searchBox = document.querySelector('#search-item')
let storeItems = document.querySelector('.card-container').childNodes
let i = 0 

searchIcon.addEventListener('click', searchbar)



function searchbar(){

    storeItems.forEach((element) => {
        console.log(element.innerText)
        if (element.innerText.toLowerCase().includes(searchBox.value.toLowerCase())=== true){

            element.style.display = 'block'

        } else  {
            element.style.display = 'none'
        }
        return element
    })
}