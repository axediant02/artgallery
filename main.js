const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

loginButton.addEventListener('click', () => {
    loginForm.classList.toggle('hidden');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Handle login logic here

    // For demonstration purposes, let's just hide the form after submission
    loginForm.classList.add('hidden');
});
