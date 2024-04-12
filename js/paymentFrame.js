function showLoading(event, button) {
    event.preventDefault(); // Prevent form submission
    button.innerHTML = "Processing Payment...";

    // get donation amount
    let amount = document.getElementById("donation-amount").value;

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

    // get current organization from session storage
    let currentOrganization = JSON.parse(sessionStorage.getItem("currentOrganization"));
    // update organization total donations as int
    currentOrganization.totalDonations += parseInt(amount);
    // update total donations
    sessionStorage.setItem("currentOrganization", JSON.stringify(currentOrganization));

    // also update organizations in local storage
    let organizations = JSON.parse(localStorage.getItem("organizations"));
    let orgIndex = organizations.findIndex(org => org.email === currentOrganization.email);
    organizations[orgIndex] = currentOrganization;
    localStorage.setItem("organizations", JSON.stringify(organizations));

    // log the process
    console.log(`${currentUser.firstName} donated ${amount} to ${currentOrganization.name}`);

    // update total donations UI outside the iframe
    window.top.location.reload();
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

const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

// update organization total donations
function updateTotalDonationsUI() {
    let currentOrganization = JSON.parse(sessionStorage.getItem("currentOrganization"));
    let totalDonations = currentOrganization.totalDonations;
    document.getElementById("total-donations").innerHTML = moneyFormatter.format(totalDonations);
}



