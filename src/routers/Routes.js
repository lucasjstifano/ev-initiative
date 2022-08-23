import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import NotFoundScreen from "../components/others/NotFoundScreen";
import HomeCrypto from "../pages/ev-crypto/HomeCrypto";
import AboutUs from "../pages/ev-initiative/AboutUs";
import Apps from "../pages/ev-initiative/Apps";
import Hardware from "../pages/ev-initiative/Hardware";
import HomeEV from "../pages/ev-initiative/HomeEV";
import SiteHosts from "../pages/ev-initiative/SiteHosts";
import Contact from "../pages/ev-initiative/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";

//Third Party Imports
import { Toaster } from "react-hot-toast";

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{ className: "react-hot-toast" }}
          />

          <Switch>
            <Route exact path="/" component={HomeEV} />
            <Route exact path="/evi-token" component={HomeCrypto} />
            <Route exact path="/about-ev-initiative" component={AboutUs} />
            <Route exact path="/hardware" component={Hardware} />
            <Route exact path="/apps" component={Apps} />
            <Route exact path="/site-hosts" component={SiteHosts} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFoundScreen} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
