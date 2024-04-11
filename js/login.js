function login(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Check if localStorage already has users data
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the provided email
    let user = users.find(user => user.email === email);

    // If no user found, or the password is incorrect, show an error message
    if (!user || user.password !== password) {
        console.log("Invalid email or password");
        return;
    }
    
    // If the user is found and the password matches, log them in
    console.log("Login successful");

    // Store the current user's information in session storage
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    // Reset form
    document.getElementById("loginForm").reset();

    // Redirect to another page or perform any other action
    location.replace("index.html");
}

// Attach event listener to the login form
document.getElementById("loginForm").addEventListener("submit", login);
