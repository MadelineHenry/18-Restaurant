//Work to get the filter buttons working
let cards = [{
        name: 'Saumon',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'sashimi'

    }, {
        name: 'Saumon Epicé',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'california'
    }, {
        name: 'Saumon Paprika',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png", 
        badge: 'futomaki'
    }, {
        name: 'California',
        ingredients: '3 sushi thon, 3 sushi saumon, 3 sushi dorade,3 sushi king fish, 3 sushi crevette, 6 sashimi de saumon, 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'maki'
    }, {
        name: 'Tuna',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item.6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'maki'
    }, {
        name: 'Thai Shrimp',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'sashimi'
    }, {
        name: 'Chicken',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png"
    }, {
        name: 'Shiso Tuna',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png",
        badge : 'california'
    }, {
        name: 'Shiso Chicken',
        ingredients: '2 sushi saumon, 2 sashimi saumon, 1 temaki saumon,6 maki saumon, 6 california roll saumon list item. 6 rainbow poulet, 6 california roll thon, 6 california roll saumon, 8 masago roll scampis, 8 rainbow king fish.',
        price: 6.50,
        image: "./imagewireframe.png"
    }

]


let cardContainer;

//CREATE CARDS


let createCard = (task) => {

    let card = document.createElement('div');
    card.classList.add('card','store-item', task.badge);
    card.setAttribute('data-item', task.badge)
    let img_container = document.createElement('div');
    img_container.className = 'img-container'

    let card_img = document.createElement('img')
    card_img.src = task.image
    
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let item_name = document.createElement('h5');
    item_name.innerText = task.name;
    item_name.className = 'card-title';
    item_name.dataset.name = task.name

    let detail = document.createElement('div');
    detail.innerText = task.ingredients;
    detail.className = 'card-text';

    let price = document.createElement('div');
    price.innerHTML = task.price + '€'
    


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
    console.log(buttons)
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


//filter search box
(function () {

    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {

        const searchFilter = e.target.value.toLowerCase()
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.innerText.includes(searchFilter)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})

/*let store = document.querySelectorAll('.store-item')
store.forEach( function (item){
    console.log(item.innerText)

})*/



const searchBox = document.querySelector('#search-item')
searchBox.addEventListener('keypress', (e) => {

    if(e.code === 'Enter' ) {
let storeItems = document.querySelectorAll('.store-item')
storeItems.forEach((item) => {

         let regex = /Saumon/gmi
         let result = item.innerText.match(regex)
         if (1) {
            item.style.display = 'none'
         } else {
             item.style.display = 'block'
         }
         return result
    }) }
})