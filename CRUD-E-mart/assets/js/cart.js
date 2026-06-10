// cart page table
let TableBody = document.getElementById("TableBody");
let TableFooter = document.getElementById("TableFooter");

function ProductList() {
    return JSON.parse(localStorage.getItem("Products")) || [];
}

function CartList() {
    return JSON.parse(localStorage.getItem("CartList")) || [];
}

// cart badge
function CartBadge() {
    let CartBadge = document.getElementById("CartBadge");

    let CartItems = CartList();

    CartBadge.innerText = CartItems.length;

}

function displayCart(List) {

    TableBody.innerHTML = ``;
    TableFooter.innerHTML = ``;

    if (List.length == 0) {
        TableBody.innerHTML = `
            <tr>
                <td class='text-center' colspan='6'>The Cart is Empty, Add Products...</td>
            </tr>
        `;
    }

    let totalAmount = List.reduce((sum, item) => {
        return sum + (item.Pprice * item.qty);
    }, 0);


    List.forEach(cartItem => {
        TableBody.innerHTML += `
            <tr>
                <td>
                    <img class='rounded-3' src='${cartItem.Purl}' width='200px' />
                </td>
                <td>${cartItem.Pname}</td>
                <td>${cartItem.Pdes}</td>
                <td>
                    <div class='d-flex gap-3 align-items-center'>
                        <button class='btn btn-outline-light' onclick='return qtyDec(${cartItem.PID})'>-</button>
                        ${cartItem.qty}
                        <button class='btn btn-outline-light' onclick='return qtyInc(${cartItem.PID})'>+</button>
                    </div>
                </td>
                <td>₹${cartItem.qty * cartItem.Pprice}</td>
                <td>
                    <button onclick='return DeleteItem(${cartItem.PID})' class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        `;

        TableFooter.innerHTML = `
            <tr>
                <td colspan="5" class="text-end">Total Amount : </td>
                <td>₹${totalAmount}</td>
            </tr>
        `;
    });
}

function DeleteItem(id) {
    console.log(id);

    let cartList = CartList();

    let resultList = cartList.filter(cart => cart.PID != id);

    localStorage.setItem("CartList", JSON.stringify(resultList));

    displayCart(resultList);
    CartBadge();

}

function qtyInc(id) {
    console.log(id);

    let cartList = CartList().map(cart => {
        if (cart.PID == id && cart.qty < 5) {
            cart.qty++;
        }
        return cart;
    });

    localStorage.setItem("CartList", JSON.stringify(cartList));

    displayCart(CartList());

}

function qtyDec(id) {
    console.log(id);

    let cartList = CartList().map(cart => {
        if (cart.PID == id && cart.qty > 1) {
            cart.qty--;
        }
        return cart;
    });

    localStorage.setItem("CartList", JSON.stringify(cartList));

    displayCart(CartList());

}

CartBadge();

displayCart(CartList());