
let ViewProducts = document.getElementById("ViewProducts");
let ViewProductsLink = document.getElementById("Product-link");

ViewProductsLink.addEventListener("click", function () {
    displayProducts();
})

function ProductList() {
    return JSON.parse(localStorage.getItem("Products")) || [];
}

function CartList() {
    return JSON.parse(localStorage.getItem("CartList")) || [];
}


// add product to localStorage from form
function addItem(event) {

    event.preventDefault();

    let Pname = document.getElementById('Pname').value;
    let Pprice = document.getElementById('Pprice').value;
    let Pdes = document.getElementById('Pdes').value;
    let Purl = document.getElementById('Purl').value;

    const product = {
        PID: Date.now(),
        Pname,
        Pprice,
        Pdes,
        Purl
    }

    let Products = JSON.parse(localStorage.getItem("Products")) || [];

    Products.push(product);

    localStorage.setItem("Products", JSON.stringify(Products));

    document.getElementById('Pname').value = "";
    document.getElementById('Pprice').value = "";
    document.getElementById('Pdes').value = "";
    document.getElementById('Purl').value = "";

}

// display product in view product page
function displayProducts(ProductList) {

    ViewProducts.innerHTML = "";

    // let products = ProductList();

    ProductList.forEach(product => {
        ViewProducts.innerHTML += `
            <div class='col-xl-4 col-md-6'>
                <div class='text-white bg-dark-grey rounded-3 p-3'>

                    <div class="text-center">
                        <img class="rounded-3" src="${product.Purl}" alt="Failed to Load" width='200px' height="200px"/>
                    </div>

                    <div class="mt-3">
                        <h5>${product.Pname}</h5>
                    </div>

                    <div class="px-4">
                        <p>${product.Pdes}</p>
                    </div>

                    <div class="d-flex align-items-center justify-content-between">
                        <h5 class="m-0 p-0">₹${product.Pprice}</h5>
                        <button onclick="return addToCart(${product.PID})" class="btn btn-light">Add To Cart</button>
                    </div>

                </div>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    console.log(id);

    let products = ProductList();
    let cartList = CartList();

    // if item is in cart gives truw
    let isAddToCart = cartList.find(cart => cart.PID == id);
    let item = products.find(pro => pro.PID == id);

    // no repeat add to cart
    if (!isAddToCart) {
        item.qty = 1;
        cartList.push(item);
    } else {
        isAddToCart.qty++;

    }
    localStorage.setItem("CartList", JSON.stringify(cartList));
    CartBadge();

}

// filter option in View product
function searchFilter() {

    event.preventDefault();

    let SearchBox = document.getElementById("searchBox").value.trim();
    let searchMessage = document.getElementById("searchMessage");

    products = ProductList();

    let filteredProductList = products.filter((product) => product.Pname.toLowerCase().includes(SearchBox.toLowerCase()));

    console.log(filteredProductList);


    displayProducts(filteredProductList);

    if (SearchBox != "") {
        searchMessage.innerText = `Results for "${SearchBox}"`
        document.getElementById("searchBox").value = "";
    } else {
        searchMessage.innerText = ``

    }
}

// cart badge
function CartBadge() {
    let CartBadge = document.getElementById("CartBadge");
    let CartItems = CartList();

    if (CartBadge) {

        CartBadge.innerText = CartItems.length;
    }

}

CartBadge();

displayProducts(ProductList());
