import React, { Component, Fragment } from "react";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import { Footer } from "../../layout/footer";
import Header from "../../layout/header";
import ActivityListing from "./activityListing";

class LocationActivities extends Component {
  render() {
    return (
      <Fragment>
        <section className="header-breadcrumb bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/breadcrumb1.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header class="menu--light" />
          </div>
          <BreadcrumbWraper title="Yaklasan Etkinlikler" />
        </section>
        <ActivityListing />
        <Footer />
      </Fragment>
    );
  }
}
export default LocationActivities;
