document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the current user's information from session storage
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    // Get login and signup links
    let signupLink = document.getElementById("signupLink");
    let loginLink = document.getElementById("loginLink");
    let logoutLink = document.getElementById("logoutLink");
    let profileLink = document.getElementById("profileLink");
    // Check if a user is logged in
    if (currentUser) {
        // Hide login and signup links
        loginLink.style.display = "none";
        signupLink.style.display = "none";

        // Add event listener to logout link
        document.getElementById("logoutLink").addEventListener("click", logout);
    } else {
        // Hide profile and settings links if user is not logged in
        logoutLink.style.display = "none";
        profileLink.style.display = "none";
    }
});

function logout() {
    // Clear current user from session storage
    sessionStorage.removeItem("currentUser");
    // Redirect to login page
    location.replace("login.html");
};

// add Khan Academy as mock organization if it does not exist
let organizations = JSON.parse(localStorage.getItem("organizations")) || [];
let khanAcademy = {
    name: "Khan Academy",
    description: "A non-profit educational organization dedicated to providing free, world-class education for anyone, anywhere.",
    website: "https://www.khanacademy.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/2560px-Khan_Academy_logo_%282018%29.svg.png",
    totalDonations: 0
}

// set as current organization
// if organization does not exist, add it
if (!organizations.find(org => org.name === khanAcademy.name)) {
    organizations.push(khanAcademy);
    localStorage.setItem("organizations", JSON.stringify(organizations));
    sessionStorage.setItem("currentOrganization", JSON.stringify(khanAcademy));
}

// // periodical mock donation, update total donations for organization
// let currentOrganization = localStorage.getItem("currentOrganization").totalDonations += 100;
// setTimeout(() => {
//     currentOrganization.totalDonations += 100;
//     localStorage.setItem("currentOrganization", JSON.stringify(currentOrganization));
// }, 10000);


