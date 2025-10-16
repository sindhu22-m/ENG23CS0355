document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                alert("Account created successfully! Redirecting to login.");
                window.location.href = "login.html";
            } else {
                const errorText = await response.text();
                alert("Error: " + errorText);
            }
        } catch (err) {
            alert("An error occurred. Please try again later.");
            console.error(err);
        }
    });
});
