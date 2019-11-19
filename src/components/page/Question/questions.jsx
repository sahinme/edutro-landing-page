import React, { Component, Fragment } from "react";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import { NavLink } from "react-router-dom";
import { SectionTitle } from "../../content/element/section-title";
import Header from "../../layout/header/index";
import QuestionGrid from "./questionGrid";

const noAction = e => e.preventDefault();

const data = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1];

class Questions extends Component {
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

        <section className="cards-grid section-padding-two border-bottom">
          <div style={{ maxWidth: "1695px" }} className="container">
            <SectionTitle
              title="Alanında Profesyonel Eğitmenlere Soru Sor"
              content="Sorunu paylaş. Yüzlerce kurum ve eğitmen arasından en doğru cevaba ulaş"
            />

            <div className="listing-cards-wrapper col-lg-12">
              <div style={{ justifyContent: "center" }} className="row">
                <div
                  style={{ cursor: "pointer" }}
                  className="btn btn-xs btn-gradient btn-gradient-two"
                >
                  <NavLink style={{ color: "white" }} to="#">
                    <span className="la la-plus"></span> Soru Olustur
                  </NavLink>
                </div>
              </div>
              <div style={{ justifyContent: "center" }} className="row">
                <QuestionGrid />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Questions;
