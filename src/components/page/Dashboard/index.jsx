import React, { Fragment, Component } from "react";
import Header from "../../layout/header";
import { Footer } from "../../layout/footer";
import { AdvSearch } from "../../content/element/advance-search";
import CardCategoryGrid4 from "../../content/element/card/card-category-grid-4";
import { SectionTitle } from "../../content/element/section-title";
import CardListingGrid4 from "../../content/element/card/card-listing-grid-4";
import { NavLink } from "react-router-dom";
import { ContentBlockHome } from "../../content/element/content-block";
import CardCategoryGrid2 from "./components/fourCityActivities";
import { PlaceList } from "../../content/element/place-list";
import Testimonial from "./components/testimonial";
import ClientLogo from "../Dashboard/components/client-logo";
import { Subscribe } from "../../content/element/subscribe";
import { connect } from "react-redux";
import SponsoredCourses from "./components/sponsoredCourses";
import { PopularCategoryList } from "../Dashboard/components/popularCategoryList";
import ActivityCard from "../../content/element/activityCard";
import Activities from "./components/activities";
import PopularCourses from "./components/popularCourses";
import FourCityActivities from "./components/fourCityActivities";

const noAction = e => e.preventDefault();
class Index extends Component {
  render() {
    const logdIn = () => {
      return this.props.login;
    };
    const light = this.props.logo[0].light;
    return (
      <Fragment>
        {/* Header section start */}
        <section className="intro-wrapper bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/intro.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header logo={light} class="menu--light" />
          </div>
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <AdvSearch />
        </section>
        {/* Header section end */}

        <section className="categories-cards section-padding-two">
          <div style={{ maxWidth: "1366px" }} className="container">
            <SectionTitle
              title="Öne çıkan eğitimler"
              content="En iyi kurumları , eğitmenleri ve etkinlikleri keşfet"
            />
            <div className="row">
              <SponsoredCourses />
            </div>
          </div>
        </section>

        <section className="section-padding-strict section-bg">
          <div className="container">
            <SectionTitle
              title="En Fazla Aranan Kategoriler"
              content="En iyi kurumları , eğitmenleri ve etkinlikleri keşfet"
            />
            <PopularCategoryList />
          </div>
        </section>

        {/* Category section start */}
        <section className="categories-cards section-padding-two">
          <div style={{ maxWidth: "1366px" }} className="container">
            <SectionTitle
              title="Yaklaşan Etkinlikler"
              content="En iyi kurumları , eğitmenleri ve etkinlikleri keşfet"
            />
            <div className="row">
              <Activities />
            </div>
          </div>
        </section>

        {/* Category section end */}

        {/* Listing section start */}
        <section className="listing-cards section-bg section-padding">
          <div className="container">
            <SectionTitle
              title="En Popüler Kurslar"
              content="Çevrenizdeki en iyi kursları keşfedin"
            />
            <div className="row">
              <div className="listing-cards-wrapper col-lg-12">
                <div className="row">
                  <PopularCourses logdIn={logdIn()} />
                  <div className="col-lg-12 text-center m-top-20">
                    <NavLink
                      onClick={noAction}
                      to="/at_demo"
                      className="btn btn-gradient btn-gradient-two"
                    >
                      Tüm Kurslar 200+
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Listing section end */}

        <ContentBlockHome />

        {/* Place section start */}
        <section className="places section-padding">
          <div className="container">
            <SectionTitle
              title="Yaklaşan Etkinlikler"
              content="Bulunduğun lokasyonda olan tüm etkinlikler ve daha fazlası"
            />
            <div className="row">
              <div className="col-lg-12">
                <div className="cat-places-wrapper">
                  <FourCityActivities />
                </div>
              </div>
              <PlaceList />
            </div>
          </div>
        </section>
        {/* Place section end */}

        {/* Testimonial section start */}
        <section className="testimonial-wrapper section-padding--bottom">
          <div className="container">
            <SectionTitle
              title="400'den Fazla Kullancı Tarafından Güvence"
              content="Edutro hakkında sizden gelenler"
            />
            <div className="row">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* Testimonial section end */}

        {/* Client section start */}
        <section className="clients-logo-wrapper border-top p-top-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ClientLogo />
              </div>
            </div>
          </div>
        </section>
        {/* client section end */}

        <Subscribe />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.list,
    login: state.login,
    logo: state.logo
  };
};

export default connect(mapStateToProps)(Index);
