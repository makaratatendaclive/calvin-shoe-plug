let iconCart=document.querySelector('.iconCart');
let closeCart=document.querySelector('.close')
let body= document.querySelector('body');
iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})



let cartItems = [];

function addToCart(productName, productPrice, productImage) {
    const item = { name: productName, price: productPrice, image: productImage };
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear current cart display

    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    cartItems.forEach(item => {
        cartItemsDiv.innerHTML += `
            <div class="item">
                <div class="image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="name">${item.name}</div>
                <div class="totalPrice">$${item.price.toFixed(2)}</div>
            </div>
        `;
    });
}

function toggleCart() {
    const cartDiv = document.getElementById('cartDiv');
    cartDiv.style.display = cartDiv.style.display === 'none' || cartDiv.style.display === '' ? 'block' : 'none';
}