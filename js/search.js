const form = document.getElementById("org-search");
const searchBar = document.getElementById("searchBar");
const submitButton = document.getElementById("searchSubmit");

function search() {
  const query = searchBar.value;
    if (query) {
        let organizations = JSON.parse(localStorage.getItem("organizations")) || [];
        let org = organizations.find(org => org.name.toLowerCase().includes(query.toLowerCase()));
        if (org) {
            sessionStorage.setItem("currentOrg", JSON.stringify(org));
            location.replace("organization.html");
        } else {
            console.log("Organization not found");
        }
    }
}