import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../layout/header";
import { Footer } from "../../layout/footer";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import CardListingGrid4 from "../../content/element/card/card-listing-grid-4";
import CustomerTitle from "./components/customerTitle";
import CustomerStory from "./components/customerStory";
import CustomerInfo from "./components/customerInfo";
import CustomerStakeholders from "./components/customerStakeholders";
import CustomerCoursesGrid from "./components/customerCoursesGrid";
import { inject, observer } from "mobx-react";
import Stores from "../../../stores/storeIdentifier";

const noAction = e => e.preventDefault();

@inject(Stores.EducatorStore)
@observer
class CustomerDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } = {} } = {} } = this.props;
    this.props.educatorStore.getEducatorDetail(id);
  }

  render() {
    return (
      <Fragment>
        {/* Header section start */}
        <section className="header-breadcrumb bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/breadcrumb1.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header logo="light" class="menu--light" />
          </div>
          <BreadcrumbWraper title="Author Profile" />
        </section>

        <section className="author-info-area section-padding-strict section-bg">
          <div className="container">
            <div className="row">
              <CustomerTitle></CustomerTitle>
              <div className="col-lg-8 col-md-7 m-bottom-30">
                <CustomerStory></CustomerStory>
              </div>
              <div className="col-lg-4 col-md-5 m-bottom-30">
                <CustomerInfo></CustomerInfo>
              </div>

              <div className="atbd_content_module atbd_contact_information_module">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-user"></span>Birlikte çalışılan
                      kurumlar
                    </h4>
                  </div>
                </div>

                <CustomerStakeholders></CustomerStakeholders>
              </div>

              <div className="atbd_content_module atbd_contact_information_module">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-user"></span>Birlikte çalışılan
                      eğitmenler
                    </h4>
                  </div>
                </div>

                <CustomerStakeholders></CustomerStakeholders>
              </div>

              <div className="col-lg-12">
                <div className="atbd_author_listings_area m-bottom-30">
                  <h1>Eğitimler</h1>
                  <div className="atbd_author_filter_area">
                    <div className="dropdown">
                      <a
                        className="btn btn-outline-primary dropdown-toggle"
                        href="# "
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Filtrele <span className="caret"></span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href=" ">
                          Kişisel Gelişim
                        </a>
                        <a className="dropdown-item" href=" ">
                          Yazılım
                        </a>
                        <a className="dropdown-item" href=" ">
                          Müzik
                        </a>
                        <a className="dropdown-item" href=" ">
                          Tasarım
                        </a>
                        <a className="dropdown-item" href=" ">
                          İş Sağlığı
                        </a>
                        <a className="dropdown-item" href=" ">
                          Sağlık
                        </a>
                        <a className="dropdown-item" href=" ">
                          Diğer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- ends: .atbd_author_listings_area -->*/}

                {/*  <div className="row">
                  <CustomerCoursesGrid />
                </div> */}
              </div>
              <div className="col col-lg-3">
                <NavLink
                  onClick={noAction}
                  to="/at_demo"
                  className="btn btn-block btn-gradient btn-gradient-two btn-lg claim-btn"
                  data-toggle="modal"
                  data-target="#moda_claim_listing"
                >
                  Hepsini Gör
                </NavLink>
              </div>

              <div className="col-lg-12">
                <div className="atbd_author_listings_area m-bottom-30">
                  <h1>Etkinlikler</h1>
                  <div className="atbd_author_filter_area">
                    <div className="dropdown">
                      <a
                        className="btn btn-outline-primary dropdown-toggle"
                        href="# "
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Filtrele <span className="caret"></span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href=" ">
                          Kişisel Gelişim
                        </a>
                        <a className="dropdown-item" href=" ">
                          Yazılım
                        </a>
                        <a className="dropdown-item" href=" ">
                          Müzik
                        </a>
                        <a className="dropdown-item" href=" ">
                          Tasarım
                        </a>
                        <a className="dropdown-item" href=" ">
                          İş Sağlığı
                        </a>
                        <a className="dropdown-item" href=" ">
                          Sağlık
                        </a>
                        <a className="dropdown-item" href=" ">
                          Diğer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- ends: .atbd_author_listings_area -->*/}

                {/*   <div className="row">
                  <CustomerCoursesGrid />
                </div> */}
              </div>
              <div className="col col-lg-3">
                <NavLink
                  onClick={noAction}
                  to="/at_demo"
                  className="btn btn-block btn-gradient btn-gradient-two btn-lg claim-btn"
                  data-toggle="modal"
                  data-target="#moda_claim_listing"
                >
                  Hepsini Gör
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}
export default CustomerDetail;
