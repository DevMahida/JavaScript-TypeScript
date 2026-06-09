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

function displayCart() {

    let cartList = CartList();

    console.log(cartList);

    let totalAmount = cartList.reduce((sum, item) => {
        console.log(item.Pprice,item.qty);
        
        return sum + (item.Pprice * item.qty);
    }, 0);

    // console.log(totalAmount);
    

    cartList.forEach(cartItem => {
        TableBody.innerHTML += `
            <tr>
                <td>
                    <img class='rounded-3' src='${cartItem.Purl}' width='200px' />
                </td>
                <td>${cartItem.Pname}</td>
                <td>${cartItem.Pdes}</td>
                <td>${cartItem.qty}</td>
                <td>${cartItem.qty * cartItem.Pprice}</td>
                <td>
                    <button class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        `;

        TableFooter.innerHTML = `
            <tr>
                <td colspan="5" class="text-end">Total Amount : </td>
                <td>${totalAmount}</td>
            </tr>
        `;
    });
}


CartBadge();


displayCart();