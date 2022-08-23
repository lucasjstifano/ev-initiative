import IcoCounter from "./IcoCounter";

const SecFAQTimeline = ({ FQAInfo, DocElementTitle }) => {
  return (
    <section
      className="faq-timeline-area section-padding-100 bg-crypto"
      id="evi-presale"
    >
      <div className="container counter-img-crypto" id="evi-presale">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">
            <IcoCounter />
          </div>
          <div className="col-12 col-lg-6 col-md-12 mb-5">
            <img
              src="assets/img/3d-icons/white_EV_no_bg.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecFAQTimeline;

// flex-column-reverse flex-lg-row
