// cart.js

// Execute the following code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the container for cart items
    const cartItemsContainer = document.getElementById('cart-items');
    // Retrieve cart items from localStorage or initialize an empty array if it doesn't exist
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // If the cart is empty
    if (cartItems.length === 0) {
        // Create a paragraph element to display a message indicating that the cart is empty
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        // Append the message to the cart items container
        cartItemsContainer.appendChild(emptyCartMessage);
    } else {
        // If the cart contains items
        // Iterate over each item in the cart
        cartItems.forEach((item, index) => {
            // Create a div element to represent a cart item
            const cartItem = document.createElement('div');
            // Set the text content of the cart item to the item's title
            cartItem.textContent = item;
            
            // Create a button element for deleting the cart item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            // Add a click event listener to the delete button
            deleteButton.addEventListener('click', function() {
                // Remove the item from the cartItems array
                cartItems.splice(index, 1);
                // Update the cart items in localStorage
                localStorage.setItem('cart', JSON.stringify(cartItems));
                // Redisplay the updated cart items
                displayCartItems();
            });
            
            // Append the delete button to the cart item
            cartItem.appendChild(deleteButton);
            // Append the cart item to the cart items container
            cartItemsContainer.appendChild(cartItem);
        });
    }
    
    // Function to display cart items
    function displayCartItems() {
        // Clear the cart items container
        cartItemsContainer.innerHTML = '';
        // If the cart is empty
        if (cartItems.length === 0) {
            // Create a paragraph element to display a message indicating that the cart is empty
            const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'Your cart is empty.';
            // Append the message to the cart items container
            cartItemsContainer.appendChild(emptyCartMessage);
        } else {
            // If the cart contains items
            // Iterate over each item in the cart
            cartItems.forEach((item, index) => {
                // Create a div element to represent a cart item
                const cartItem = document.createElement('div');
                // Set the text content of the cart item to the item's title
                cartItem.textContent = item;

                // Create a button element for deleting the cart item
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                // Add a click event listener to the delete button
                deleteButton.addEventListener('click', function() {
                    // Remove the item from the cartItems array
                    cartItems.splice(index, 1);
                    // Update the cart items in localStorage
                    localStorage.setItem('cart', JSON.stringify(cartItems));
                    // Redisplay the updated cart items
                    displayCartItems();
                });

                // Append the delete button to the cart item
                cartItem.appendChild(deleteButton);
                // Append the cart item to the cart items container
                cartItemsContainer.appendChild(cartItem);
            });
        }
    }
});
