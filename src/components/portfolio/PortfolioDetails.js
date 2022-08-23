import React from "react";

const PortfolioDetails = () => {
  return (
    <section className="portfolio-details pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="portfolio-feature-img pb-60">
            <img
              src="assets/img/portfolio/portfolio2-1.jpg"
              alt="Portfolio Feature Thumnail"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="portfolio-deatil-info">
              <h3 className="">
                Brand redesign meanwhile <br />
                focusing product
              </h3>
              <p>
                Consequat semper viverra nam libero justo laoreet. Morbi
                tristique senectus et netus. Amet tellus cras adipiscing enim eu
                turpis. Ante in nibh mauris cursus mattis molestie a.
                Scelerisque felis imperdiet proin fermentum leo vel. Id aliquet
                risus feugiat in. Volutpat odio facilisis mauris sit amet massa
                vitae. Amet massa vitae tortor condimentum lacinia quis. Auctor
                augue mauris augue neque gravida in fermentum. Nisl purus in
                mollis nunc sed id semper risus in.
              </p>
              <p>
                Fusce ut placerat orci nulla pellentesque dignissim. Risus in
                hendrerit gravida rutrum quisque non tellus orci. Varius sit
                amet mattis vulputate enim nulla aliquet porttitor. In ornare
                quam viverra orci sagittis eu volutpat odio facilisis. Non
                blandit massa enim nec dui nunc.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="list-unstyled">
              <li className="py-2">
                <h5>Client</h5>
                <span> ThemeTags Creative Agency</span>
              </li>
              <li className="py-2">
                <h5>Date</h5>
                <span>January 18, 2022</span>
              </li>
              <li className="py-2">
                <h5>Service</h5>
                <span> Design and Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
