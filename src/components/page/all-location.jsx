import React, { Fragment } from "react";
import Header from "../layout/header";
import { Footer } from "../layout/footer";
import { BreadcrumbWraper } from "../content/element/breadcrumb";
import { connect } from "react-redux";
import { AllLocations } from "../page/Dashboard/components/popularCategoryList";
import { SectionTitle } from "../content/element/section-title";
const AllLocation = props => {
  const light = props.logo[0].light;
  return (
    <Fragment>
      {/* Header section start */}
      <section className="header-breadcrumb bgimage overlay overlay--dark">
        <div className="bg_image_holder">
          <img src="./assets/img/breadcrumb1.jpg" alt="" />
        </div>
        <div className="mainmenu-wrapper">
          <Header logo={light} class="menu--light" />
        </div>
        {/* <!-- ends: .mainmenu-wrapper --> */}
        <BreadcrumbWraper title="All Locations" />
      </section>
      {/* Header section end */}
      <section className="section-padding-strict section-bg">
        <SectionTitle
          title="Şehrini Seç Eğitime Başla"
          content="Tüm şehirlerdeki eğitim ve etkinliklere göz at"
        />
        <AllLocations />
      </section>
      <Footer />
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    logo: state.logo
  };
};

export default connect(mapStateToProps)(AllLocation);
