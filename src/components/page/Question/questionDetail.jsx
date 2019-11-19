import React, { Component, Fragment } from "react";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import Header from "../../layout/header";
import Comment from "./comment";

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
          <div class="row">
            <div class="col">
              <Comment></Comment>
            </div>
            <div class="col-md-auto">Variable width content</div>
            <div class="col col-lg-2">3 of 3</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default QuestionDetail;
