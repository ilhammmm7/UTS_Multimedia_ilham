let cartItems = [];

// Tambah Produk ke Keranjang
function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
  showNotification(`${productName} ditambahkan ke keranjang`);
}

// Notifikasi
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = message;
  document.body.appendChild(notification);
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
    document.body.removeChild(notification);
  }, 3000);
}

// Modal Pop-Up Detail Produk
function showProductDetail(title, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
