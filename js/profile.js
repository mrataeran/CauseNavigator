function getCurrentProfile() {
    user = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(user);
    if (user) {
        document.getElementById("name").innerText = user.firstName + " " + user.lastName;
        document.getElementById("emailLink").href = user.email;
        document.getElementById("totalDonations").innerText = "Total donations: " + moneyFormatter.format(user.totalDonations);
    }
}

const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

document.addEventListener("onLoad", getCurrentProfile());

let enableNight = () => {
    var body = document.getElementById("body");
  
    if (body.classList.contains('theme--light')){
        body.classList.remove('theme--light');
        body.classList.add('theme--dark');
    }else{
        body.classList.remove('theme--dark');
        body.classList.add('theme--light');
    }
}
