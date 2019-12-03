import React, { Component, Fragment } from "react";
import Header from "../../layout/header/index";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import { SectionTitle } from "../../content/element/section-title";
import SponsoredCourses from "../Dashboard/components/sponsoredCourses";
import PopularCourses from "./components/popularCourses";
import PopularEducators from "./components/popularEducators";
import { inject, observer } from "mobx-react";
import Stores from "../../../stores/storeIdentifier";
import Listing from "../../container/all-listing";

@inject(Stores.CourseStore)
@observer
class CategoryDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } = {} } = {} } = this.props;
    this.props.courseStore.getCoursesByCategory(id);
  }

  render() {
    const { coursesByCategory } = this.props.courseStore;
    return (
      <Fragment>
        <section className="header-breadcrumb bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/breadcrumb1.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header logo="light" class /* Name */="menu--light" />
          </div>
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <BreadcrumbWraper title="Eğitim Kategorileri" />
        </section>

        {coursesByCategory && coursesByCategory.length > 0 ? (
          <section className="categories-cards section-padding-two">
            <div style={{ maxWidth: "1366px" }} className="container">
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="row"
              >
                <span className="badge badge-pill badge-warning">YAZILIM</span>
              </div>
              <SectionTitle title="Bu Kategorideki En Populer Egitimler" />
              <div className="row">
                <PopularCourses courses={coursesByCategory} />
              </div>
            </div>
          </section>
        ) : null}

        {coursesByCategory && coursesByCategory.length > 0 && (
          <Listing courses={coursesByCategory}></Listing>
        )}

        {/*  <section className="categories-cards section-padding-two">
          <div style={{ maxWidth: "1366px" }} className="container">
            <SectionTitle title="Bu Kategorideki En Populer Egitmenler" />
            <div className="row">
              <PopularEducators />
            </div>
          </div>
        </section> */}

        {/*   <section className="categories-cards section-padding-two">
          <div style={{ maxWidth: "1366px" }} className="container">
            <SectionTitle title="Bu Kategorideki En Populer Kurumlar" />
            <div className="row">
              <SponsoredCourses />
            </div>
          </div>
        </section> */}
      </Fragment>
    );
  }
}

export default CategoryDetail;
