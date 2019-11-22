import React, { Component, Fragment } from "react";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import Header from "../../layout/header";
import Comment from "./commentCard";
import { SimilarListing } from "../../content/element/widget";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import SimilarQuestions from "./similarQuestions";

const data = [1, 1, 1, 1];

class QuestionDetail extends Component {
  render() {
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
          <BreadcrumbWraper title="Soru & Cevap" />
        </section>
        {/* Header section end */}

        <div class="container">
          <div style={{ marginTop: "20px" }} class="row">
            <div class="col">
              <Comment replies={[1, 1, 1, 1]}></Comment>
            </div>
            <div class="col-lg-4">
              <div className="widget atbd_widget widget-card">
                <div className="atbd_widget_title">
                  <h4>
                    <span className="la la-list-alt"></span> Benzer Soru &
                    Cevaplar
                  </h4>
                  <NavLink to="/filtered-ques">Hepsi</NavLink>
                </div>
                {/*<!-- ends: .atbd_widget_title -->*/}
                <div className="atbd_categorized_listings atbd_similar_listings">
                  <SimilarQuestions list={this.props.list} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.list,
    logo: state.logo
  };
};
export default connect(mapStateToProps)(QuestionDetail);
