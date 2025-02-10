let cart = [];
let totalPrice = 0;

function addToCart(accName, price) {
    cart.push({ accName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalElement = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.accName} - ${item.price} VNĐ`;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
    } else {
        alert(`Thanh toán thành công! Tổng tiền: ${totalPrice} VNĐ`);
        cart = [];
        totalPrice = 0;
        updateCart();
    }
}
