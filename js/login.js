/* Este es el documento JS del login de un carrito de compras
Edwin Donaldo Saucedo Vazquez  Clase Javascript 30435 */

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