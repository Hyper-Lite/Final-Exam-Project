// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the menu toggle button and the navigation menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Add click event listener to the toggle button
    menuToggle.addEventListener("click", function () {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle("active");
    });
});