// Execute the following code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'add-to-cart' and store them in the variable 'addToCartButtons'
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Iterate over each 'addToCartButtons' element and attach a 'click' event listener to it, calling the 'addToCart' function
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Function to add a book to the cart
    function addToCart(event) {
        // Get the title of the book associated with the clicked button
        const bookTitle = event.target.parentElement.querySelector('h2').textContent;
        // Retrieve the cart items from localStorage or initialize an empty array if it doesn't exist
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        // Add the book title to the cart items array
        cartItems.push(bookTitle);
        // Store the updated cart items array in localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
        // Display an alert confirming that the book has been added to the cart
        alert(`Added "${bookTitle}" to cart!`);
    }

    // Select the 'Books' link in the navigation menu
    const booksLink = document.querySelector('nav ul li:nth-child(2) a'); 
    // Select the section containing the books
    const booksSection = document.querySelector('.books'); 
    // Select the search container section
    const searchContainer = document.getElementById('search-container');
    // Select the search input field
    const searchInput = document.getElementById('search-input');
    // Select the search button
    const searchButton = document.getElementById('search-button');

    // If the 'Books' link exists
    if (booksLink) {
        // Add a 'click' event listener to the 'Books' link
        booksLink.addEventListener('click', function (event) {
            // Prevent the default action of the link
            event.preventDefault();
            // Toggle the visibility of the search container and books section
            toggleSearch(); 
        });
    }

    // Function to toggle the visibility of the search container and books section
    function toggleSearch() {
        // If the search container is currently hidden
        if (searchContainer.style.display === 'none') {
            // Display the search container and hide the books section
            searchContainer.style.display = 'block';
            booksSection.style.display = 'none'; 
        } else {
            // Otherwise, hide the search container and display the books section
            searchContainer.style.display = 'none';
            booksSection.style.display = 'block'; 
        }
    }

    // If the search button exists
    if (searchButton) {
        // Add a 'click' event listener to the search button
        searchButton.addEventListener('click', function () {
            // Retrieve the search term from the search input field, trim whitespace, and convert to lowercase
            const searchTerm = searchInput.value.trim().toLowerCase();
            // Log the search term to the console
            console.log('Search term:', searchTerm);
        });
    }
});
