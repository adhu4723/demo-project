document.addEventListener("DOMContentLoaded", function () {
    // Check if we are on the login or signup page
    if (document.getElementById("login-form")) {
        setupLogin();
    } else if (document.getElementById("signup-form")) {
        setupSignup();
    }
});

function setupLogin() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        if (email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        console.log("Logging in with:", email, password);
        // Add fetch API call for login here
    });
}

function setupSignup() {
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("signup-username").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;

        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        console.log("Signing up with:", username, email, password);
        // Add fetch API call for signup here
    });
}
