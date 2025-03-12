// Example: Form Validation for Registration Page
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email || !password) {
                alert('Veuillez remplir tous les champs.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // Example: Add interactivity to the search bar
    const searchForm = document.querySelector('form[action="search.html"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            const searchQuery = document.querySelector('input[type="text"]').value;
            if (!searchQuery) {
                alert('Veuillez entrer un terme de recherche.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});