// Search functionality for printers
document.getElementById("searchButton").addEventListener("click", function () {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    let found = false;

    products.forEach(product => {
        const productName = product.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.border = "2px solid #4caf50"; // Highlight matched product
            product.scrollIntoView({ behavior: "smooth", block: "center" });
            found = true;
        } else {
            product.style.border = "none";
        }
    });

    if (!found) {
        alert("No matching printer found. Try searching for another product!");
    }
});

// Smooth scrolling for navigation menu links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});