/* Este es el documento JS del index de un carrito de compras
Edwin Donaldo Saucedo Vazquez  Clase Javascript 30435 */

/* Nota se agregaron dos documentos de JavaScript con la finalidad de tener uno independiente
para cada pagina, me gustaria una retroalimentacion de si esto es una buena practica
o no, de antemano gracias */

/*********************************************************************************/
//Array of initial products
/*********************************************************************************/
let nameDocument = getDocumentName();
console.log(nameDocument);

/*********************************************************************************/
//JavaScript File for index.html
/*********************************************************************************/
if(nameDocument == "index.html" || nameDocument == ""){
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

let foodProduct = {};
let cartList = [];
let subTotal = 0;
//console.log(foodProduct);
let navBar = document.querySelector(".section");
navBar.addEventListener("click", function() {
    if ("click") {
        nameDocument = getDocumentName();
    }
});

/*********************************************************************************/
//Declaring principal global variables
/*********************************************************************************/

let quantity = 0;
let product = document.getElementsByClassName("item");
let quantityInput;
//console.log(product);
let count = 0;
let itemContainer = document.querySelector(".items");

/*********************************************************************************/
//Adding initial products to the html
/*********************************************************************************/

for (let item in foodList) {
    addProduct(item);
}

console.log(Object.keys(foodProduct).includes("Spaghetti"));

//console.log(productsList);

let cart = document.querySelector(".cart");
let cartCounter = cart.querySelector(".productCounter");
let showCart = document.querySelector(".cartContainer");
let productList = document.querySelector(".content");
let emptyContent = document.querySelector(".productList");
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

for (let item of product) {
    let button = item.querySelector(".addCart");
    button.addEventListener("click", function () {
        if (quantity == 0) {
            cartCounter.style.display = "flex";
        }
        
        if(itemsInCart(++quantity, button.id)){
            cartCounter.innerHTML = quantity;
        }
        else{
            quantity--;
        }
    });
}

function clearCart() {
    quantity = 0;
    cartCounter.innerHTML = quantity;
    cartCounter.style.display = "none";
    itemsInCart(quantity);
}

function itemsInCart(counter, name) {
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
            document.querySelector(".titles").style.contentVisibility = "visible";
            document.querySelector(".total").style.contentVisibility = "visible";
        }
        if(Object.keys(cartList).includes(name)){
            alert("Product already in cart increse the quantity instead");
            return false;
        }
        addItemToCart(name);
        let total = document.querySelector(".totalPrice");
        total.innerHTML = `$${sumTotal()}.00`;
    }
    return true;
}

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
    let cost = (price.innerHTML = `$${Math.floor(Math.random() * 10 + 1)}`);
    let identifier = (name.innerHTML = foodList[item]);
    button.className = `addCart`;
    button.id = `${identifier}`;
    button.innerHTML = "Add to cart";

    itemContainer.appendChild(container);
    info.appendChild(infoContainer);
    container.appendChild(img);
    container.appendChild(info);
    infoContainer.appendChild(name);
    infoContainer.appendChild(price);
    info.appendChild(button);

    img.style.contentVisibility = "visible";
    img.style.backgroundImage = `url(/img/${++count}.jpg)`
    let url = img.style.backgroundImage;
    if (identifier == undefined) {
        alert("Enter a valid product");
    } else if (isOnList(identifier)) {
        alert("Product already on list");
    }
    foodProduct[name.innerHTML] = { price: cost, img: url };
}

function addItemToCart(identifier) {
    let list = document.createElement("li");
    list.className = "newItem";
    productList.appendChild(list);
    let img = document.createElement("img");
    img.className = "imgList";
    list.appendChild(img);
    let text = document.createElement("span");
    text.className = "name";
    list.appendChild(text);
    text.innerHTML = identifier;
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
    price.innerHTML = foodProduct[identifier].price;
    img.style.backgroundImage = `${foodProduct[identifier].img}`;
    cartList[identifier] = {quantity : 1, input : input, price : price.innerHTML};
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


function sumTotal(cartList){
    let total = 0;
    for(let element in cartList){
        total += parseInt(cartList[element].input.value) * parseInt(cartList[element].price);
    }
    return total;
}

}



/*********************************************************************************/
//JavaScript File for login.html
/*********************************************************************************/

if(nameDocument == "login.html"){
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
        
    } 
    else if (username == "admin" && password == "admin") {
        showInputAddProduct();
    } 
    else {
        alert("Wrong username or password");
    }
});



function showInputAddProduct() {
    let addProductContainer = document.createElement("div");
    addProductContainer.className = "loginContent";
    document.querySelector(".containerLogin").appendChild(addProductContainer);
    document.querySelector(".login").remove();
    for(let i = 0; i < 3; i++){
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
        arrayList.push({[name] : {price, url}}); 
        console.log(arrayList);
    });
}

function deleteLastProduct() {
    let lastProduct = arrayList.pop();
    console.log(lastProduct);
    return lastProduct;
}
}
function getDocumentName(){
    return self.location.href.substring(self.location.href.lastIndexOf("/") + 1);
}