let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    document.getElementById('cartCount').textContent = cart.length;
    alert(`${productName} añadido a la bolsa.`);
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.productName} - Q${item.price}</p>`;
    });
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function submitOrder() {
    const name = prompt('Ingrese su nombre:');
    const phone = prompt('Ingrese su número de celular:');
    
    fetch('/.netlify/functions/receiveOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, cart })
    })
    .then(response => response.json())
    .then(data => {
        alert('Solicitud enviada con éxito.');
        cart = [];
        document.getElementById('cartCount').textContent = 0;
        closeCart();
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}

document.getElementById('viewCart').addEventListener('click', openCart);
