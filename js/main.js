/* Este es el documento JS del index de un carrito de compras
Edwin Donaldo Saucedo Vazquez  Clase Javascript 30435 */

class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantCart = 0;
    }
}

let shopList  = [
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
    { name: "Fried Chicked", price: 8.0, img: "img/20.jpg", quantCart: 0 },
];

let cartList = [];
let cartListNode = [];

/************************************************************************************/

let nameDocument = getDocumentName();
console.log(nameDocument);

let quantityInput;
let quantity = 0;
let foodProduct = {};

let cart = document.querySelector(".cart");
let cartCounter = cart.querySelector(".productCounter");
let showCart = document.querySelector(".cartContainer");
let itemContainer = document.querySelector(".items");
let cartContent = document.querySelector(".content");


//console.log(product);

/*********************************************************************************/
//JavaScript File for index.html
/*********************************************************************************/
/*********************************************************************************/

if (nameDocument == "index.html" || nameDocument == "") {
    for (let item of shopList) {
        addProduct(item);
    }
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
                console.log(product);
                shopList.push(product);
                console.log(shopList);
            }
        });
    }
    
    function deleteLastProduct() {
        let lastProduct = shopList.pop();
        console.log(lastProduct);
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
clearCart();

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
    button.innerHTML = "Add to cart";

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
        alert("Product already in cart increse the quantity instead");
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
    input.className = "quantity";
    input.id = `${product.name}`;
    input.type = "number";
    input.min = "0";
    input.max = "10";
    input.value = "1";
    htmlNode.appendChild(input);
    let price = document.createElement("span");
    price.className = "price";
    price.id = `price${product.name}`;
    htmlNode.appendChild(price);
    price.innerHTML = `$${product.price}.00`;
    img.style.backgroundImage = `url('${product.img}')`;
    product.quantCart++;
    cartList.push(product);
    cartListNode.push(htmlNode);
    addEventInput(input);
    return true;
}

function isOnList(identifier) {
    return shopList.includes(identifier);
}


function clearCart() {
    cartList.forEach(function (item) {
        item.quantCart = 0;
    });
    cartList = [];
    cartContent.innerHTML = "";
    document.querySelector(".total").innerHTML = "$0.00";
    document.querySelector(".total").style.display = "none";
    let list = document.createElement("li");
    list.className = "newItem empty";
    cartContent.appendChild(list);
    let img = document.createElement("img");
    img.className = "imgList";
    list.appendChild(img);
    let text = document.createElement("span");
    text.className = "name empty";
    list.appendChild(text);
    text.innerHTML = "Cart is empty";
    list.style.flexFlow = "column nowrap";
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.backgroundImage = "url('img/shopping-cart-empty.png')";
    img.style.backgroundSize = "100px";
    img.style.backgroundPosition = "20px center";
    list.style.color = "black";
    text.style.filter = "opacity(0.2)";
    text.style.marginBottom = "30px";
    img.style.filter = "opacity(0.2)";
    quantity = 0;
    cartCounter.innerHTML = quantity;
    cartCounter.style.display = "none";
    cartContent.style.borderRadius = "0 0 20px 20px";
    document.querySelector(".titles").style.contentVisibility = "hidden";
    document.querySelector(".titles").style.backgroundColor = "#ffffff";
    document.querySelector(".titles").style.height = "0";
    document.querySelector(".total").style.height = "0";
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
        let product = shopList.find((item) => item.name == btn.id);
        let isDone = addItemToCart(product);
        if (isDone) {
            quantity++;
            cartCounter.innerHTML = quantity;
            cartCounter.style.display = "flex";
            if (quantity == 1) {
                document.querySelector(".empty").remove();
                document.querySelector(".titles").style.contentVisibility =
                    "visible";
                document.querySelector(".titles").style.height =
                    "50px";
                document.querySelector(".titles").style.backgroundColor = "#1d47d31f";
                document.querySelector(".total").style.display =
                    "block";
            }
            getTotal();
            document.querySelector(".total").style.height = '30px';
            
        }
    });
}

/*********************************************************************************/

function getTotal() {
    let total = 0;
    for(let element of cartList){
        total = total + (element.price * element.quantCart);
    }
    document.querySelector(".total").innerHTML = `$${total}.00`;
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
            getTotal();
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
            cartContent.removeChild(item);
            cartListNode.splice(cartListNode.indexOf(item), 1);
            cartList.splice(cartList.indexOf(product), 1);
        }
    });
    getTotal();
    if(cartList.length == 0){
        clearCart();
    }
}