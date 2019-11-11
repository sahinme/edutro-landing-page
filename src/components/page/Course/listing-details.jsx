import React, { Fragment } from "react";
import Header from "../../layout/header";
import { Footer } from "../../layout/footer";
import { connect } from "react-redux";
import { BreadcrumbSingle } from "../../content/element/breadcrumb";
import { ContentStory } from "./components/listing-details-story";
import Gallery from "../../content/element/carousel/gallery";
import { ListingFetures } from "./components/listing-fetures";
import { Video, Video2 } from "../../content/element/video";
import Map1 from "../../content/element/map";
import { ContactInfo } from "../../content/element/contact-info";
import { Accordion } from "../../content/element/accordion";
import { Review, AddReview } from "./components/review";
import {
  SellerInfo,
  BusinessInfo,
  CategoryWithIcon,
  TagStyle,
  SimilarListing,
  PopularListing
} from "../../content/element/widget";

import { NavLink } from "react-router-dom";
import { ContactForm } from "../../content/element/contact-form";
import Report from "../../content/element/modal/report";
import Clime from "../../content/element/modal/clime-list";
import Stakeholders from "./components/stakeholders";
const noAction = e => e.preventDefault();

const CourseDetail = props => {
  const light = props.logo[0].light;
  const id = props.match.params.id;
  const filter = Object.values(props.list).filter(value => {
    return value.id === id;
  });

  return (
    <Fragment>
      {/* Header section start */}
      <section className="listing-details-wrapper bgimage">
        <div className="bg_image_holder">
          <img src="./assets/img/details-img.jpg" alt="" />
        </div>
        <div className="mainmenu-wrapper">
          <Header logo={light} class="menu--light" />
        </div>
        {/* <!-- ends: .mainmenu-wrapper --> */}
        <div className="listing-info content_above">
          <div className="container">
            <div className="row">
              <BreadcrumbSingle filter={filter} />
            </div>
          </div>
        </div>
      </section>
      {/* Header section end */}
      <section className="directory_listiing_detail_area single_area section-bg section-padding-strict">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ContentStory />

              <div className="atbd_content_module atbd_contact_information_module">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-building"></span>Kurumlar
                    </h4>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    padding: "10px"
                  }}
                >
                  <Stakeholders />
                </div>
              </div>

              <div className="atbd_content_module atbd_contact_information_module">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-user"></span>Eğitmenler
                    </h4>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    padding: "10px"
                  }}
                >
                  <Stakeholders />
                </div>
              </div>

              <div className="atbd_content_module atbd_listing_gallery">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-image"></span>Eğitim hakkında
                      görseller
                    </h4>
                  </div>
                </div>
                <Gallery />
              </div>
              {/* Gallery end */}

              <ListingFetures />

              <div className="atbd_content_module atbd_custom_fields_contents">
                <div className="atbd_content_module__tittle_area">
                  <div className="atbd_area_title">
                    <h4>
                      <span className="la la-youtube-play"></span>Tanıtım
                      videosu
                    </h4>
                  </div>
                </div>
                <Video />
              </div>
              {/* video end */}

              {/* Contact Info end */}

              <Review />
              <AddReview />
            </div>
            <div className="col-lg-4">
              <div className="widget atbd_widget widget-card">
                <div className="atbd_widget_title">
                  <h4>
                    <span className="la la-user"></span>Eğitimi Oluşturan
                  </h4>
                </div>
                {/* <!-- ends: .atbd_widget_title --> */}
                <SellerInfo />
              </div>
              {/* end seller info */}

              <div className="widget atbd_widget widget_claim_listing">
                <NavLink
                  onClick={noAction}
                  to="/at_demo"
                  className="btn btn-block btn-gradient btn-gradient-two btn-lg claim-btn"
                  data-toggle="modal"
                  data-target="#moda_claim_listing"
                >
                  Bu eğitim hakkında soru sor
                </NavLink>
              </div>
              {/*<!-- ends: .widget -->*/}
              <div className="widget atbd_widget widget-card">
                <div className="atbd_widget_title">
                  <h4>
                    <span className="la la-envelope"></span> Eğitim hakkında
                    bilgi alın
                  </h4>
                </div>
                {/*<!-- ends: .atbd_widget_title -->*/}
                <div className="atbdp-widget-listing-contact">
                  <ContactForm />
                </div>
              </div>
              {/* end sidebar contact */}

              <div className="widget atbd_widget widget-card">
                <div className="atbd_widget_title">
                  <h4>
                    <span className="la la-list-alt"></span> Benzer Eğitimler
                  </h4>
                  <NavLink to="/all-listings-grid">Hepsi</NavLink>
                </div>
                {/*<!-- ends: .atbd_widget_title -->*/}
                <div className="atbd_categorized_listings atbd_similar_listings">
                  <SimilarListing list={props.list} />
                </div>
              </div>
              {/* end similar listing */}

              <div className="widget atbd_widget widget-card">
                <div className="atbd_widget_title">
                  <h4>
                    <span className="la la-list-alt"></span> Popüler Eğitimler
                  </h4>
                  <NavLink to="/all-listings-grid">Hepsi</NavLink>
                </div>
                {/*<!-- ends: .atbd_widget_title -->*/}
                <div className="atbd_categorized_listings atbd_popular_listings">
                  <PopularListing list={props.list} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Report />
      <Clime />
      <Footer />
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    list: state.list,
    logo: state.logo
  };
};
export default connect(mapStateToProps)(CourseDetail);
