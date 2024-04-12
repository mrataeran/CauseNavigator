function getNews() {
    // TODO: Implement news retrieval
}

// add placeholder for news for now
const newsBody = document.getElementsByClassName("card-body")[0];

for (let i = 0; i < 3; i++) {
    const newChild = document.createElement("div");
    newChild.className = "row";
    newChild.innerHTML = `
    <div class="col-sm-4 grid-margin">
      <div class="position-relative">
        <div class="rotate-img">
          <img
            src="https://borgenproject.org/wp-content/uploads/10439420976_28e7cfd55d_z.jpg"
            alt="thumb"
            class="img-fluid"
          />
        </div>
        <div class="badge-positioned">
          <span class="badge badge-danger font-weight-bold">Flash news</span>
        </div>
      </div>
    </div>
    <div class="col-sm-8 grid-margin">
      <h4 class="mb-2 font-weight-600">
        Empowering Education: New Scholarships Announced
      </h4>
      <div class="fs-13 mb-2">10 Minutes ago</div>
      <p class="mb-0">
        In our ongoing commitment to education, we are excited to
        announce the launch of new scholarship programs aimed at
        empowering students worldwide. Learn more about how these
        scholarships will make a positive impact on education
        accessibility.
      </p>
    </div>`

    newsBody.appendChild(newChild);

    }