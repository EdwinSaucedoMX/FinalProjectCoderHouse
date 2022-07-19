/* Este es el documento JS del index de un carrito de compras
Edwin Donaldo Saucedo Vazquez  Clase Javascript 30435 */

/* Nota se agregaron dos documentos de JavaScript con la finalidad de tener uno independiente
para cada pagina, me gustaria una retroalimentacion de si esto es una buena practica
o no, de antemano gracias */
/*********************************************************************************/
//Array of initial products
/*********************************************************************************/
class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantCart = 0;
    }
}

let shopList = [
    {name :"Spaghetti", price: 1.00 , img: "img/1.jpg", quantCart : 0},
    {name :"Burger with fries", price: 1.00 , img: "img/2.jpg", quantCart : 0},
    {name :"Steak", price: 1.00 , img: "img/3.jpg", quantCart : 0},
    {name :"Meat Skewers", price: 1.00 , img: "img/4.jpg", quantCart : 0},
    {name :"Vegan Pizza", price: 1.00 , img: "img/5.jpg", quantCart : 0},
    {name :"Light Yogurt", price: 1.00 , img: "img/6.jpg", quantCart : 0},
    {name :"Rainbow  Ice Cream", price: 1.00 , img: "img/7.jpg", quantCart : 0},
    {name :"Shawarma", price: 1.00 , img: "img/8.jpg", quantCart : 0},
    {name :"Chicken Salad", price: 1.00 , img: "img/9.jpg", quantCart : 0},
    {name :"Ribs", price: 1.00 , img: "img/10.jpg", quantCart : 0},
    {name :"Panini", price: 1.00 , img: "img/11.jpg", quantCart : 0},
    {name :"Italian Pasta", price: 1.00 , img: "img/12.jpg", quantCart : 0},
    {name :"Skirt Steak", price: 1.00 , img: "img/13.jpg", quantCart : 0},
    {name :"Churros", price: 1.00 , img: "img/14.jpg", quantCart : 0},
    {name :"Skewers", price: 1.00 , img: "img/15.jpg", quantCart : 0},
    {name :"Salad", price: 1.00 , img: "img/16.jpg", quantCart : 0},
    {name :"Ramen", price: 1.00 , img: "img/17.jpg", quantCart : 0},
    {name :"Wings", price: 1.00 , img: "img/18.jpg", quantCart : 0},
    {name :"Donuts", price: 1.00 , img: "img/19.jpg", quantCart : 0},
    {name :"Fried Chicked", price: 1.00 , img: "img/20.jpg", quantCart : 0}
];

let cartList = [];

function addToShop(item){
    if(shopList.includes(item)){
        alert("Product already on list");
    }
    else {
        shopList.push(item);
    }
}
/************************************************************************************/

let nameDocument = getDocumentName();
console.log(nameDocument);

let quantityInput;
let count = 0;
let quantity = 0;
let subTotal = 0;
let foodProduct = {};
let foodList = [
    "Spaghetti",
    "Burger with fries",
    "Steak",
    "Meat Skewers",
    "Vegan Pizza",
    "Light Yogurt",
    "Rainbow  Ice Cream",
    "Shawarma",
    "Chicken Salad",
    "Ribs",
    "Panini",
    "Italian Pasta",
    "Skirt Steak",
    "Churros",
    "Skewers",
    "Salad",
    "Ramen",
    "Wings",
    "Donuts",
    "Fried Chicked",
];

let cart = document.querySelector(".cart");
let cartCounter = cart.querySelector(".productCounter");
let showCart = document.querySelector(".cartContainer");
let navBar = document.querySelector(".section");
let product = document.getElementsByClassName("item");
let itemContainer = document.querySelector(".items");
let productList = document.querySelector(".content");
let emptyContent = document.querySelector(".productList");

navBar.addEventListener("click", function () {
    if ("click") {
        nameDocument = getDocumentName();
    }
});
//console.log(product);


/*********************************************************************************/
//JavaScript File for index.html
/*********************************************************************************/
/*********************************************************************************/
//Declaring principal global variables
/*********************************************************************************/

/*********************************************************************************/
//Adding initial products to the html
/*********************************************************************************/
if (nameDocument == "index.html" || nameDocument == "") {

    for (let item of shopList) {
        console.log(item.img);
        addProduct(item);
    }
    
    /* Array.from(foodProduct);
    foodProduct = Array.from(Object.entries(foodProduct));
    foodProduct.push(["Enchiladas", { price: "$3", url: "www.google.com" }]);
    console.log(foodProduct); */

    //console.log(productsList);

    for (let item of product) {
        let button = item.querySelector(".addCart");
        button.addEventListener("click", function () {
            if (quantity == 0) {
                cartCounter.style.display = "flex";
            }
            console.log(`This is the ${itemsInCart(quantity, button.id)}`);
            if (itemsInCart(++quantity, button.id)) {
                cartCounter.innerHTML = quantity;
            } else {
                quantity--;
            }
        });
    }
}

/*********************************************************************************/
//JavaScript File for login.html
/*********************************************************************************/

if (nameDocument == "login.html") {
    let btnLogin = document.querySelector(".btnLogin");
    let inputArrayPlaceholder = ["Name", "Price", "Url Image"];
    let btnAddProduct;
    let arrayList = [];

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
            input.id = inputArrayPlaceholder[i].toLowerCase();
            input.placeholder = inputArrayPlaceholder[i];
            addProductContainer.appendChild(input);
            if (input.id == "url image") {
                input.id = "url";
            }
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
            let url = document.querySelector("#url").value;
            arrayList.push({ [name]: { price, url } });
            console.log(arrayList);
        });
    }

    function deleteLastProduct() {
        let lastProduct = arrayList.pop();
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

function clearCart() {
    quantity = 0;
    cartCounter.innerHTML = quantity;
    cartCounter.style.display = "none";
    itemsInCart(quantity);
}

function itemsInCart(counter, product) {
    if (counter == 0) {
        let list = document.createElement("li");
        list.className = "newItem empty";
        emptyContent.appendChild(list);
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
        img.style.backgroundImage = "url(img/shopping-cart-empty.png)";
        img.style.backgroundSize = "100px";
        img.style.backgroundPosition = "20px center";
        list.style.color = "black";
        text.style.filter = "opacity(0.2)";
        text.style.marginBottom = "30px";
        img.style.filter = "opacity(0.2)";
        return;
    } else if (counter > 0) {
        if (counter == 1) {
            document.querySelector(".empty").remove();
            document.querySelector(".titles").style.contentVisibility =
                "visible";
            document.querySelector(".total").style.contentVisibility =
                "visible";
        }
        if (Object.keys(cartList).includes(name)) {
            alert("Product already in cart increse the quantity instead");
            return false;
        }
        addItemToCart(product);
        let total = document.querySelector(".totalPrice");
        total.innerHTML = `$${sumTotal()}.00`;
    }
    return true;
}


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
    img.style.backgroundImage = `url(${item.img})`;
}
/**************************************************************/


function addItemToCart(product) {
    let list = document.createElement("li");
    list.className = "newItem";
    productList.appendChild(list);
    let img = document.createElement("img");
    img.className = "imgList";
    list.appendChild(img);
    let text = document.createElement("span");
    text.className = "name";
    list.appendChild(text);
    text.innerHTML = product.name;
    let input = document.createElement("input");
    input.className = "quantity";
    input.type = "number";
    input.min = "1";
    input.max = "10";
    input.value = "1";
    list.appendChild(input);
    let price = document.createElement("span");
    price.className = "price";
    list.appendChild(price);
    price.innerHTML = product.price;
    img.style.backgroundImage = `url(${product.img})`;
    product.quantCart++;
    cartList.push(product);
    console.log(cartList);
}

function isOnList(identifier) {
    for (let element in foodProduct) {
        if (element == identifier) {
            return true;
        }
    }
    return false;
}

console.log(cartList);

function sumTotal(cartList) {
    let total = 0;
    for (let element in cartList) {
        total +=
            parseInt(cartList[element].input.value) *
            parseInt(cartList[element].price);
    }
    return total;
}
