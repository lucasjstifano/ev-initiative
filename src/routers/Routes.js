import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import NotFoundScreen from "../components/others/NotFoundScreen";
import Apps from "../pages/Apps";
import Contact from "../pages/Contact";
import AboutUs from "../themes/-about-us/AboutUs";
import HomeEV from "../themes/-ev-initiative/HomeEV";
import HomeCrypto from "../themes/-evi-coin/HomeCrypto";
import iFrame from "../themes/-iFrame-test/iFrame";
import PrivacyPolicy from "../themes/-privacy-policy/PrivacyPolicy";
import SiteHosts from "../themes/-site-hosts/SiteHosts";
import Hardware from "../themes/-hardware/Hardware";

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomeEV} />
            <Route exact path="/evi-token" component={HomeCrypto} />
            <Route exact path="/about-ev-initiative" component={AboutUs} />
            <Route exact path="/hardware" component={Hardware} />
            <Route exact path="/apps" component={Apps} />
            <Route exact path="/site-hosts" component={SiteHosts} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/iframe" component={iFrame} />
            {/*<Route exact path="/password-reset" component={PasswordReset} />
             <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} /> */}
            <Route component={NotFoundScreen} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
