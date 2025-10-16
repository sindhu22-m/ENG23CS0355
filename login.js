// Sample credentials (for demonstration purposes only)
var validUsername = "game";
const validPassword = "abcd";

// Get form and error message
let form = document.getElementById("login-form");
let errorMessage = document.getElementById("error-message");

// Handle login form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check credentials
  if (username === validUsername && password === validPassword) {
    // Successful login: Redirect to the home page
    sessionStorage.setItem("loggedIn", "true");
    alert("Login successful! Redirecting to games...");
    window.location.href = "index.html"; // Redirect to main page
  } else {
    // Failed login
    errorMessage.textContent = "Invalid username or password.";
  }
});
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      alert("Login successful! Redirecting...");
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "index.html"; 
    } else {
      const errorText = await response.text();
      alert("Error: " + errorText);
    }
  } catch (err) {
      alert("An error occurred. Please try again later.");
      console.error(err);
  }
});