/* Este es el documento JS del index de un carrito de compras
Edwin Donaldo Saucedo Vazquez  Clase Javascript 30435 */

let topList = JSON.parse(localStorage.getItem('topList'));
let shopList = JSON.parse(localStorage.getItem('shopList'));

let nameDocument = getDocumentName();
console.log(nameDocument);

let quantityInput;
let quantity = localStorage.getItem('counterCart');

if(quantity == null){
    quantity = 0;
}

let foodProduct = {};

let cart = document.querySelector(".cart");
let cartCounter = cart.querySelector(".productCounter");
cartCounter.innerHTML = 0;
let showCart = document.querySelector(".cartContainer");
let itemContainer = document.querySelector(".items");
let cartContent = document.querySelector(".content");

const addTopProducts = (set) => { //Function to add three items to Top List
    while(set.size != 3){
        let number = parseInt(Math.random()*20);
        set.add(shopList[number]);
    }
};


if(shopList == null){
    shopList =[
    { name: "Spaghetti", price: 5.0, img: "img/1.jpg", quantCart: 0 },
    { name: "Burger with fries", price: 1.0, img: "img/2.jpg", quantCart: 0 },
    { name: "Steak", price: 8.0, img: "img/3.jpg", quantCart: 0 },
    { name: "Meat Skewers", price: 10.0, img: "img/4.jpg", quantCart: 0 },
    { name: "Vegan Pizza", price: 15.0, img: "img/5.jpg", quantCart: 0 },
    { name: "Light Yogurt", price: 1.0, img: "img/6.jpg", quantCart: 0 },
    { name: "Rainbow  Ice Cream", price: 1.0, img: "img/7.jpg", quantCart: 0 },
    { name: "Shawarma", price: 5.0, img: "img/8.jpg", quantCart: 0 },
    { name: "Chicken Salad", price: 10.0, img: "img/9.jpg", quantCart: 0 },
    { name: "Ribs", price: 15.0, img: "img/10.jpg", quantCart: 0 },
    { name: "Panini", price: 1.0, img: "img/11.jpg", quantCart: 0 },
    { name: "Italian Pasta", price: 3.0, img: "img/12.jpg", quantCart: 0 },
    { name: "Skirt Steak", price: 5.0, img: "img/13.jpg", quantCart: 0 },
    { name: "Churros", price: 1.0, img: "img/14.jpg", quantCart: 0 },
    { name: "Skewers", price: 5.0, img: "img/15.jpg", quantCart: 0 },
    { name: "Salad", price: 3.0, img: "img/16.jpg", quantCart: 0 },
    { name: "Ramen", price: 8.0, img: "img/17.jpg", quantCart: 0 },
    { name: "Wings", price: 10.0, img: "img/18.jpg", quantCart: 0 },
    { name: "Donuts", price: 1.0, img: "img/19.jpg", quantCart: 0 },
    { name: "Fried Chicked", price: 8.0, img: "img/20.jpg", quantCart: 0 } 
];
    localStorage.setItem('shopList', JSON.stringify(shopList));
    console.log(shopList);
} 

if(topList == null){
    let topListSet = new Set();
    addTopProducts(topListSet);    
    topList = Array.from(topListSet);
    localStorage.setItem('topList', JSON.stringify(topList));
}
class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantCart = 0;
    }
}
let index = 0;
let isReady = false;
let nextProduct;
let progress;
let showClear = false;




let cartList = JSON.parse(localStorage.getItem('cartList'));
let cartListNode = JSON.parse(localStorage.getItem('cartListNode'));

if (cartList == null && cartListNode == null){
    cartList = [];
    cartListNode = [];
    clearCart();
}
else {
    cartList.forEach(item => {
        addButtonToCart(item.name);
    });
}

/************************************************************************************/




//console.log(product);

/*********************************************************************************/
//JavaScript File for index.html
/*********************************************************************************/
/*********************************************************************************/

if (nameDocument == "index.html" || nameDocument == "") {
    for (let item of shopList) {
        addProduct(item);
    }
    //DOM
    let top = document.querySelector(".top");
    let details = document.querySelector(".details");
    let nextRight = document.querySelector('.fa-angle-right');
    let nextLeft = document.querySelector('.fa-angle-left');
    
    
    let name = document.createElement('span');
    let price = document.createElement('span');
    name.innerHTML = topList[index].name
    price.innerHTML = `$ ${topList[index].price}`
    details.appendChild(name);
    details.appendChild(price);
    top.style.backgroundImage = `url(${topList[index].img})`;

    progress = document.querySelectorAll('progress');
    
    nextProduct = () => {
        progress[index].value = 0;
        index = queueCircle(++index, topList.length);
        name.innerHTML = topList[index].name;
        price.innerHTML = `$ ${topList[index].price}`;
        top.style.backgroundImage = `url(${topList[index].img})`;
    };

    nextLeft.addEventListener('click', () => {
        progress[index].value = 0;
        index = queueCircle(--index, topList.length);
        console.log(index);
        name.innerHTML = topList[index].name;
        price.innerHTML = `$ ${topList[index].price}`;
        top.style.backgroundImage = `url(${topList[index].img})`;
    });
    
    
    nextRight.addEventListener('click', nextProduct);

    let button = document.querySelector(".topButton");
    addAllButtons(button);
    button.addEventListener('click', () =>{
        addButtonToCart(topList[index].name)
    })

    
}

/*********************************************************************************/
//JavaScript File for login.html
/*********************************************************************************/

if (nameDocument == "login.html") {
    let btnLogin = document.querySelector(".btnLogin");
    let inputArrayPlaceholder = ["Name", "Price", "Url Image"];
    let btnAddProduct;

    btnLogin.addEventListener("click", function () {
        let username = document.querySelector(".user").value;
        let password = document.querySelector(".pass").value;
        console.log(username, password);
        if (username == "" && password == "") {
            alert("Please enter your username and password");
        } else if (username == "admin" && password == "admin") {
            showInputAddProduct();
        } else {
            alert("Wrong username or password");
        }
    });

    function showInputAddProduct() {
        let addProductContainer = document.createElement("div");
        addProductContainer.className = "loginContent";
        document
            .querySelector(".containerLogin")
            .appendChild(addProductContainer);
        document.querySelector(".login").remove();
        for (let i = 0; i < 3; i++) {
            let input = document.createElement("input");
            input.className = `inputAddProduct`;
            if (i == 2) {
                let input = document.createElement("div");
                input.className = `inputAddProduct`;
                input.id = "url";
                let btnImg = document.createElement("input");
                btnImg.type = "file";
                btnImg.className = "btnImg";
                btnImg.setAttribute("accept", "image/*");
                console.log(btnImg.name);
                addProductContainer.appendChild(input);
                input.appendChild(btnImg);
                break;
            }
            input.placeholder = inputArrayPlaceholder[i];
            input.id = inputArrayPlaceholder[i].toLowerCase();
            addProductContainer.appendChild(input);
        }
        btnAddProduct = document.createElement("button");
        btnAddProduct.className = "btnAddProduct";
        btnAddProduct.innerHTML = "Add Product";
        addProductContainer.appendChild(btnAddProduct);
        addNewProduct();
    }

    function addNewProduct() {
        btnAddProduct.addEventListener("click", function () {
            let name = document.querySelector("#name").value;
            let price = document.querySelector("#price").value;
            let url = document.querySelector("#url input[type='file']").value;
            url = url.substring(url.lastIndexOf("\\") + 1);
            if (name == "" || price == "" || url == "") {
                alert("Please enter all the fields");
            }
            else{
                let product = new Product(name, price, `img/${url}`);
                shopList.push(product);
                localStorage.setItem('shopList', JSON.stringify(shopList));
            }
        });
    }
    
    function deleteLastProduct() {
        let lastProduct = shopList.pop();
        localStorage.setItem('shopList', JSON.stringify(shopList));
        return lastProduct;
    }
}

/*********************************************************************************/
//Global
/*********************************************************************************/

let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    clearCart();
});

function getDocumentName() {
    return self.location.href.substring(
        self.location.href.lastIndexOf("/") + 1
    );
}

cart.addEventListener("click", function (e) {
    if (e.target.classList.contains("cart")) {
        showCart.style.contentVisibility = "visible";
        cart.style.transform = "scale(1.2)";
        cart.style.animation = "none";
    } else if (e.target.classList.contains("close")) {
        showCart.style.contentVisibility = "hidden";
        cart.style.transform = "scale(1)";
        cart.style.animation = "none";
    }
});

//esta bien este
function addProduct(item) {
    let container = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("div");
    let name = document.createElement("span");
    let price = document.createElement("span");
    let button = document.createElement("button");
    let infoContainer = document.createElement("div");
    infoContainer.className = "product";
    container.className = "item";
    info.className = "child";
    name.className = "text";
    price.className = "text";
    price.innerHTML = `$${item.price}.00`;
    name.innerHTML = item.name;
    button.className = `addCart`;
    button.id = `${item.name}`;
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

    itemContainer.appendChild(container);
    info.appendChild(infoContainer);
    container.appendChild(img);
    container.appendChild(info);
    infoContainer.appendChild(name);
    infoContainer.appendChild(price);
    info.appendChild(button);

    img.style.contentVisibility = "visible";
    img.style.backgroundImage = `url('${item.img}')`;
}
/**************************************************************/

//addItemToCart(shopList[1]);

function addItemToCart(product) {
    if (isOnCart(product)) {
        return false;
    }
    let htmlNode = document.createElement("li");
    
    htmlNode.className = "newItem";
    cartContent.appendChild(htmlNode);
    let img = document.createElement("img");
    img.className = "imgList";
    htmlNode.appendChild(img);
    let text = document.createElement("span");
    text.className = "name";
    htmlNode.appendChild(text);
    text.innerHTML = product.name;
    let input = document.createElement("input");
    let containerInput = document.createElement('span');
    containerInput.className = 'quant-container'
    input.className = "quantity";
    input.id = `${product.name}`;
    input.type = "number";
    input.min = "0";
    input.max = "10";
    input.value = "1";
    htmlNode.appendChild(containerInput);
    containerInput.appendChild(input);
    let price = document.createElement("span");
    let erase = document.createElement('i');
    erase.setAttribute('class', 'fa-solid fa-delete-left')

    price.className = "price";
    price.id = `price${product.name}`;
    htmlNode.appendChild(price);
    htmlNode.appendChild(erase);
    price.innerHTML = `$${product.price}.00`;
    img.style.backgroundImage = `url('${product.img}')`;
    product.quantCart++;
    cartList.push(product);
    cartListNode.push(htmlNode);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('cartListNode', JSON.stringify(cartListNode));
    addEventInput(input);
    console.log(htmlNode.innerHTML);
    return true;
}

function isOnList(identifier) {
    return shopList.includes(identifier);
}


function clearCart(show) {
    if(cartList.length > 0){
        cartList.forEach(function (item) {
            item.quantCart = 0;
        });
    }
    cartList = [];
    cartListNode = [];
    cartContent.innerHTML = "";
    document.querySelector(".total").innerHTML = "$0.00";
    document.querySelector(".total").style.display = "none";
    let list = document.createElement("li");
    list.className = "newItem empty";
    cartContent.appendChild(list);
    let img = document.createElement("img");
    img.className = "emptyCart";
    list.appendChild(img);
    let text = document.createElement("span");
    text.className = "name empty";
    list.appendChild(text);
    text.innerHTML = "Cart is empty";
    list.style.flexFlow = "column nowrap";
    img.style.backgroundImage = "url('img/shopping-cart-empty.png')";
    
    list.style.color = "var(--sixth)";
    text.style.filter = "opacity(0.2)";
    text.style.marginBottom = "30px";
    img.style.filter = "opacity(0.2)";
    quantity = 0;
    cartCounter.innerHTML = 0;
    cartCounter.style.display = "none";
    cartContent.style.borderRadius = "0 0 20px 20px";
    document.querySelector(".titles").style.contentVisibility = "hidden";
    document.querySelector(".titles").style.backgroundColor = "var(--first)";
    document.querySelector(".titles").style.height = "0";
    document.querySelector(".total").style.height = "0";
    if(showClear){
        showAlert('Cart is clean');
    }
    else{
        showClear = true;
    }
}

function isOnCart(product) {
    return cartList.includes(product);
}



/*********************************************************************************/
//Events
/*********************************************************************************/

//Event for add product to cart

let btnAddCart = document.querySelectorAll(".addCart");

for (let btn of btnAddCart) {
    addAllButtons(btn);
    btn.addEventListener("click", function () {
        addButtonToCart(btn.id);
    });
}

/*********************************************************************************/

function getTotal(name) {
    let total = 0;
    for(let element of cartList){
        total = total + (element.price * element.quantCart);
    }
    document.querySelector(".total").innerHTML = `$${total}.00`;
    if(name){
        let product = cartList.find((item) => item.name == name);
        console.log(product);
        let price = cartListNode.find((item) => item.innerHTML.includes(name));
        price.querySelector(".price").innerHTML = `$${product.price * product.quantCart}.00`;
    }
}

function addEventInput (input){
    input.addEventListener("change", function(){
        let product = cartList.find((item) => item.name == input.id);
        product.quantCart = input.value;
        if(input.value == 0){
            removeItemFromCart(product);
        }
        else if (input.value > 10){
            alert("You can't add more than 10 items");
            input.value = "";
        }
        else{
            getTotal(input.id);
            cartCounter.innerHTML = 0
            updateCartCounter();
        }
    });
}


function addToShop(item) {
    if (shopList.includes(item)) {
        alert("Product already on list");
    } else {
        shopList.push(item);
    }
}

function addAllButtons(button) {
    button.addEventListener("click", function (e) {
        button.style.animation = "increaseButton .25s ease-in-out normal";
        setTimeout(function () {
            button.style.animation = "";
        }, 250);
    });
}

function removeItemFromCart(product){
    cartListNode.forEach(function(item){
        if(item.innerHTML.includes(product.name)){
            item.remove();
            cartListNode.splice(cartListNode.indexOf(item), 1);
            cartList.splice(cartList.indexOf(product), 1);
        }
    });
    getTotal();
    updateCartCounter()
    if(cartList.length == 0){
        clearCart();
    }
}

function addButtonToCart(name) {
    let product = shopList.find((item) => item.name == name);
        let isDone = addItemToCart(product);
        if (isDone) {
            quantity++;
            localStorage.setItem('counterCart', quantity);
            cartCounter.innerHTML++;
            cartCounter.style.display = "flex";
            if (quantity == 1) {
                document.querySelector(".empty").remove();
            }
            document.querySelector(".titles").style.contentVisibility =
                "visible";
            document.querySelector(".titles").style.height =
                "50px";
            document.querySelector(".titles").style.backgroundColor = "var(--seventh)";
            document.querySelector(".total").style.display =
                "block";
            getTotal();
            document.querySelector(".total").style.height = '30px';
            showAlert('Product Added');
        }
        else {
            showAlert('Product Already In Cart');
        }
}

/* setTimeout(function(){
    console.log('Ready');
    isReady = true;
}, 10000); */


if(nameDocument == '' || nameDocument == 'index.html'){
    
    setInterval(function(){
        progress[index].value++
        if(progress[index].value == 100){
            nextProduct();
        }
    },70);
}

function queueCircle(index, length){
    if(index < 0){
        index = length - 1;
    }
    else if (index >= length){
        index = 0;
    }
    return index;
}


function showAlert(string){
    setTimeout(function(){}, 1000);
    let alertBox = document.createElement('div');
    let alert = document.createElement('div');
    alertBox.id = 'alertBox';
    alert.id = 'alert';
    alertBox.appendChild(alert);
    document.querySelector('body').append(alertBox);
    alertBox.style.display = 'flex';
    alertBox.style.opacity = 1;
    alert.innerText = string;
    setTimeout(function(){
        alertBox.style.opacity = 0;
    },200);
    setTimeout(function(){
        alertBox.style.display = 'none';
        alertBox.remove();
    },3000);
}

function updateCartCounter(){
    let sum = 0;
    for(let element of cartList){
        sum += Number(element.quantCart);
    }
    cartCounter.innerHTML = sum;
}


//Scroll event for animation

let lastScroll = 0;
let initFirstCount = true;
let initSecondCount = false;
let scrollDown =  $('.angles-down');
let scrollUp =  $('.angles-up');
let isScrolling;

scrollUp.hide();
scrollDown.hide();

//**console.log('Tamanio', document.body.clientHeight - window.innerHeight); //calcular el espacio disponible del scroll

window.addEventListener('scroll', (e) => {
    scroll = window.pageYOffset;
    
    isScrolling = true;
    if(scroll > lastScroll){
        //console.log('down');
        if(scroll == document.body.clientHeight - window.innerHeight){
            scrollDown.hide();
        }
        else {
            scrollDown.show();
            scrollUp.hide();

        }
        if(initFirstCount){
            
            setTimeout(() => {
                initFirstCount = false;
                initSecondCount = true;
            }, 500);
            scrollDown.addClass("angles-down-an");
        }
        else if (initSecondCount){
            setTimeout(() => {
                initFirstCount = true;
                initSecondCount = false;
            }, 500);
            scrollDown.removeClass("angles-down-an");
        }
    }
    else{
        //console.log('up');\
        if(scroll == 0){
            scrollUp.hide();
        }
        else {
            scrollDown.hide();
            scrollUp.show();

        }
        if(initFirstCount){
            setTimeout(() => {
                initFirstCount = false;
                initSecondCount = true;
            }, 500);
            scrollUp.addClass("angles-up-an");
        }
        else if (initSecondCount){
            setTimeout(() => {
                initFirstCount = true;
                initSecondCount = false;
            }, 500);
            scrollUp.removeClass("angles-up-an");
        }
    }
    lastScroll = scroll;
    
    isScrolling = false;
})


//Check for hide the scroll animation
setInterval(() => {
    if(!isScrolling){
        scrollUp.hide();
        scrollDown.hide();
    }
}, 500);