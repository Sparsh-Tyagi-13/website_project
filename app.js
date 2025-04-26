// Add event listener to the login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission behavior

    // Get email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple check for email and password
    if (!email || !password) {
        alert('Please fill in all fields!');
        return;
    }

    // Simulated login check (change this to your actual authentication logic)
    if (email === 'test@example.com' && password === 'password123') {
        // If login is successful, store the userLoggedIn status in localStorage
        localStorage.setItem('userLoggedIn', 'true'); 

        alert('Login Successful!');
        window.location.href = 'dashboard.html';  // Redirect to the dashboard page
    } else {
        alert('Invalid email or password!');
    }
});

// Check if the user is already logged in on page load
if (localStorage.getItem('userLoggedIn') === 'true') {
    window.location.href = 'dashboard.html';  // If already logged in, redirect to dashboard
}
