import React, { Component, Fragment } from "react";
import BlogGrid4 from "../../content/element/card/card-blog-grid4";
import { connect } from "react-redux";
import Header from "../../layout/header/index";
import { Footer } from "../../layout/footer/index";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import { SectionTitle } from "../../content/element/section-title";

class Blog extends Component {
  render() {
    const { blog } = this.props;
    return (
      <Fragment>
        <section className="header-breadcrumb bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/breadcrumb1.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header logo="light" class="menu--light" />
          </div>
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <BreadcrumbWraper title="Blog" />
        </section>

        {/* Header section end */}
        <section className="blog-area blog-grid section-padding-strict section-bg">
          <div className="container">
            <SectionTitle
              title="Haftanın popüler yazılarını kaçırma"
              content="Bilim ,Sanat ,Resim ,Kişisel Gelişim, Teknoloji ve binlercesi"
            />

            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="search-widget">
                  <form action="#">
                    <div className="input-group">
                      <input
                        style={{ backgroundColor: "#ffffff" }}
                        type="text"
                        className="fc--rounded"
                        placeholder="arama yapın..."
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
              <BlogGrid4 blog={blog} />
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blog,
    logo: state.logo
  };
};
export default  (Blog);
