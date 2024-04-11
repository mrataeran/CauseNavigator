function showLoading(event, button) {
    event.preventDefault(); // Prevent form submission
    button.innerHTML = "Processing Payment...";

    // get donation amount
    let amount = 10;//document.getElementById("donation-amount").value;

    processPayment(amount);
    button.innerHTML = "Payment completed.";
    setTimeout(() => {
        location.reload();
    }, 1000);
  }

function processPayment(amount) {
    // get current user from session storage
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    // update user total donations
    currentUser.totalDonations += amount;    
    // set session storage
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

    // get current organization from local storage
    let currentOrganization = JSON.parse(localStorage.getItem("currentOrganization"));
    currentOrganization.totalDonations += amount;
    // update total donations
    localStorage.setItem("currentOrganization", JSON.stringify(currentOrganization));


    // log the process
    console.log(`${currentUser.firstName} donated ${amount} to ${currentOrganization.name}`);
}

// show payment frame if current user is logged in
function showPaymentFrame() {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("paymentFrame").style.display = "block";
        // hide login or signup buttons
        document.getElementById("loginOrSignupButtons").style.display = "none";
    } else {
        // hide payment frame if no user is logged in
        document.getElementById("paymentFrame").style.display = "none";
        // show login or signup buttons
        document.getElementById("loginOrSignupButtons").style.display = "block";
    }
}
