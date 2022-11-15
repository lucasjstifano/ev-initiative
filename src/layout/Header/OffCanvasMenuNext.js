import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  navHomeOne,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenuNext = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasWithBackdrop"
    >
      <div className="offcanvas-header d-flex align-items-center mt-4">
        <div className="offcanvas-body">
          <ul className="nav col-12 col-md-auto justify-content-center main-menu">
            <li>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="nav-link">Services</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="nav-link">Testimonials</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="nav-link">Benefits</a>
              </Link>
            </li>
          </ul>
          <div className="action-btns mt-4 ps-3">
            <Link href="/">
              <a className="btn btn-primary">Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenuNext;
