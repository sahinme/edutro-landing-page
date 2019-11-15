import React, { Component, Fragment } from "react";
import CardCategoryGrid4 from "../../content/element/card/card-category-grid-4";
import CategoryWidget from "./components/categoryWidget";
import Header from "../../layout/header/index";
import { Footer } from "../../layout/footer/index";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";

class CourseCategories extends Component {
  state = {};
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
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <BreadcrumbWraper title="Eğitim Kategorileri" />
        </section>
        {/* Header section end */}
        <section className="section-padding-1_7 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="search-widget">
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="fc--rounded"
                        placeholder="Kategori ismi arayin..."
                      />
                      <button type="submit">
                        <i className="la la-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <CategoryWidget />
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default CourseCategories;
