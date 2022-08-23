import React from 'react';

const OerviewCard = () => {
  return (
    <>
      <div className='job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0'>
        <h5>Job Overviews</h5>
        <ul className='job-overview-list list-unstyled mt-4'>
          <li>
            <i className='far fa-map-marker-alt text-primary'></i>
            <div className='overview-item'>
              <h6 className='mb-0'>Location:</h6>
              <span>London, UK</span>
            </div>
          </li>
          <li>
            <i className='far fa-user text-primary'></i>
            <div className='overview-item'>
              <h6 className='mb-0'>Job Title:</h6>
              <span>Designer</span>
            </div>
          </li>
          <li>
            <i className='far fa-clock text-primary'></i>
            <div className='overview-item'>
              <h6 className='mb-0'>Hours:</h6>
              <span>50h / week</span>
            </div>
          </li>
          <li>
            <i className='far fa-history text-primary'></i>
            <div className='overview-item'>
              <h6 className='mb-0'>Rate:</h6>
              <span>$15 - $25 / hour</span>
            </div>
          </li>
          <li>
            <i className='far fa-wallet text-primary'></i>
            <div className='overview-item'>
              <h6 className='mb-0'>Salary:</h6>
              <span>$35k - $45k</span>
            </div>
          </li>
        </ul>
        <a href='contact-us.html' className='btn btn-primary d-block mt-5'>
          Apply now
        </a>
      </div>
    </>
  );
};

export default OerviewCard;
