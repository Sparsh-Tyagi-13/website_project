document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (response.status === 200) {
    alert('Login successful');
    // Store JWT token in localStorage for future use
    localStorage.setItem('token', result.token);
    // Redirect user to the job details page
    window.location.href = '/job-details.html';  // Adjust the URL if needed
  } else {
    alert(result.message || 'Error during login');
  }
});
