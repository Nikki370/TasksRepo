document.addEventListener("DOMContentLoaded", () => {
  // --- COMMON FUNCTIONALITY FOR ALL PAGES ---
  const cartCountElement = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("trendyShopCart")) || [];

  // Function to update the cart count in the navbar
  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
  };

  const saveCart = () => {
    localStorage.setItem("trendyShopCart", JSON.stringify(cart));
    updateCartCount(); 
  };

  // Initial update of the cart count when any page loads
  updateCartCount();

  // --- ADD TO CART FUNCTIONALITY ---
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      const productName = event.target.dataset.name;
      const productPrice = parseFloat(event.target.dataset.price);

      const existingProduct = cart.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({
          id: productId,
          name: productName,
          price: productPrice,
          quantity: 1,
        });
      }

      saveCart();
      alert(`${productName} has been added to your cart!`);
    });
  });

  const hamburgerIcon = document.getElementById("mobile");
  const hamburgerSidebar = document.querySelector(".hamburgerBox");
  const crossBtn = document.getElementById("cross");

  hamburgerIcon.addEventListener("click", () => {
    hamburgerSidebar.classList.add("active");
  });

  crossBtn.addEventListener("click", () => {
    hamburgerSidebar.classList.remove("active");
  });

  // --- SHOPPING CART PAGE  ---
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartTotalElement = document.getElementById("cart-total");

  // Function to render (display) cart items 
  const renderCartItems = () => {
    if (!cartItemsContainer) return; 

    cartItemsContainer.innerHTML = ""; 

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalElement.textContent = "$0.00";
      return;
    }

    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;

      // <img src="images/product${item.id}.jpg" alt="${item.name}">

      const cartItemHTML = `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-details">
                        <div>
                            <h3>${item.name}</h3>
                            <p>$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-btn">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-btn">+</button>
                    </div>
                    <button class="remove-item-btn">Remove</button>
                </div>
            `;
      cartItemsContainer.innerHTML += cartItemHTML;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  };


  renderCartItems();


  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (event) => {
      const target = event.target;
      const cartItemElement = target.closest(".cart-item");
      if (!cartItemElement) return;

      const productId = cartItemElement.dataset.id;
      const productIndex = cart.findIndex((item) => item.id === productId);
      if (productIndex === -1) return;

      
      if (target.classList.contains("increase-btn")) {
        cart[productIndex].quantity++;
      }

  
      if (target.classList.contains("decrease-btn")) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity--;
        }
      }

      // Handle item removal
      if (target.classList.contains("remove-item-btn")) {
        cart.splice(productIndex, 1);
      }

      saveCart();
      renderCartItems(); 
    });
  }
});
