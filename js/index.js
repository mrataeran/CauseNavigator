document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the current user's information from session storage
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    // Get login and signup links
    let signupLink = document.getElementById("signupLink");
    let loginLink = document.getElementById("loginLink");
    let logoutLink = document.getElementById("logoutLink");
    // Check if a user is logged in
    if (currentUser) {
        // Hide login and signup links
        loginLink.style.display = "none";
        signupLink.style.display = "none";

        // Add event listener to logout link
        document.getElementById("logoutLink").addEventListener("click", function(event) {
            // Prevent the default link behavior
            event.preventDefault();
            // Clear current user from session storage
            sessionStorage.removeItem("currentUser");
            // Redirect to login page
            location.replace("login.html");
        });
    } else {
        // Hide profile and settings links if user is not logged in
        logoutLink.style.display = "none";
        document.getElementById("profileLink").style.display = "none";
        document.getElementById("settingsLink").style.display = "none";
    }
});

// add Khan Academy as mock organization
let organizations = JSON.parse(localStorage.getItem("organizations")) || [];
let khanAcademy = {
    name: "Khan Academy",
    description: "A non-profit educational organization dedicated to providing free, world-class education for anyone, anywhere.",
    website: "https://www.khanacademy.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/2560px-Khan_Academy_logo_%282018%29.svg.png",
    totalDonations: 0
}
// set as current organization
localStorage.setItem("currentOrganization", JSON.stringify(khanAcademy));
organizations.push(khanAcademy);
localStorage.setItem("organizations", JSON.stringify(organizations));
