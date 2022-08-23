import React from 'react';

const JobHeader = () => {
  return (
    <>
      <section
        className='page-header position-relative overflow-hidden ptb-120 bg-dark'
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom left",
        }}
      >
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-lg-8 col-12'>
              <div className='company-info-wrap'>
                <div className='company-logo p-4 bg-white shadow rounded-custom me-4 mt-2'>
                  <div className='logo'>
                    <img
                      src='assets/img/company/2.png'
                      alt='company logo'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='company-overview'>
                  <h1 className='display-5 fw-bold'>
                    Senior Backend Developer
                  </h1>

                  <h6>About The Company</h6>
                  <ul className='list-unstyled list-inline mb-0 mt-3'>
                    <li className='list-inline-item me-4'>
                      <i className='far fa-house-building me-2'></i> Google
                    </li>
                    <li className='list-inline-item me-4'>
                      <div className='star-rating'>
                        <i className='far fa-smile me-2'></i>
                        <span className='fas fa-star small text-warning'></span>
                        <span className='fas fa-star small text-warning'></span>
                        <span className='fas fa-star small text-warning'></span>
                        <span className='fas fa-star small text-warning'></span>
                        <span className='fas fa-star small text-warning'></span>
                      </div>
                    </li>
                    <li className='list-inline-item me-4'>
                      <i className='far fa-map-marker-alt me-2'></i>United
                      Kingdom
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-12'>
              <div className='annual-salary-wrap rounded-custom'>
                <h6>Annual Salary</h6>
                <span className='display-6 fw-semi-bold text-dark mb-0'>
                  $35k - $38k
                </span>
              </div>
            </div>
          </div>

          <div className='bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5'></div>
        </div>
      </section>
    </>
  );
};

export default JobHeader;
