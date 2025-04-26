<form id="loginForm">
  <input type="text" name="username" placeholder="Username" required />
  <input type="password" name="password" placeholder="Password" required />
  <button type="submit">Login</button>
</form>

<script>
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    fetch('/login', {
      method: 'POST',
      body: new URLSearchParams({
        'username': username,
        'password': password
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/';
      } else {
        alert('Login failed');
      }
    });
  });
</script>
