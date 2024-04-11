function signup(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if localStorage already has users data
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("User with this email already exists");
        return;
    }

    // Create user object
    let user = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        totalDonations: 0,
    };

    // Add the new user to the array
    users.push(user);

    // Save updated user array to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    console.log("User registered successfully");

    // Store the current user's information in session storage
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    // Reset form
    document.getElementById("signupForm").reset();

    // Redirect to another page
    location.replace("index.html");
}

// Attach event listener to the form
document.getElementById("signupForm").addEventListener("submit", signup);
