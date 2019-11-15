import React, { Fragment } from "react";
import Header from "../../layout/header";
import { Footer } from "../../layout/footer";
import { BreadcrumbWraper } from "../../content/element/breadcrumb";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  editions,
  basicEditions,
  economicEditions,
  proEditions,
  platiniumEditions,
  unlimitedEditions
} from "./editions";

const PricingPlan = props => {
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
        <BreadcrumbWraper title="Paket Planları" />
      </section>
      {/* Header section end */}

      <section className="section-padding-1_7 section-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="pricing pricing--1 ">
                <div className="pricing__title">
                  <h4>
                    Başlangıç
                    <span className="atbd_plan-active">Active</span>
                  </h4>
                </div>
                <div className="pricing__price rounded">
                  <p
                    style={{ fontSize: "1.66667rem" }}
                    className="pricing_value"
                  >
                    Ücretsiz
                  </p>
                  {/* <!-- <p className="pricing_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora!</p> --> */}
                </div>
                <div className="pricing__features">
                  <ul className="list-unstyled">
                    {basicEditions.map(x => {
                      return (
                        <li>
                          {x.status ? (
                            <span className="la la-check available"></span>
                          ) : (
                            <span className="la la-times unavailable"> </span>
                          )}
                          {x.unlimeted && (
                            <span className="atbd_color-success">Sınırsız</span>
                          )}
                          {x.count && x.count} {x.name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="price_action m-top-25">
                    <NavLink
                      to="/checkout"
                      className="btn btn-block btn-outline-secondary price_action--btn"
                    >
                      Hemen Başla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing pricing--1 atbd_pricing_special">
                <span className="atbd_popular_badge">Popüler</span>
                <div className="pricing__title">
                  <h4>Ekonomik</h4>
                </div>
                <div className="pricing__price rounded">
                  <p className="pricing_value">
                    <sup>₺</sup>11.90<small> / 30 gün</small>
                  </p>
                  <p className="pricing_subtitle">Tek Paket</p>
                  {/* <!-- <p className="pricing_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora!</p> --> */}
                </div>
                <div className="pricing__features">
                  <ul className="list-unstyled">
                    {economicEditions.map(x => {
                      return (
                        <li>
                          {x.status ? (
                            <span className="la la-check available"></span>
                          ) : (
                            <span className="la la-times unavailable"> </span>
                          )}
                          {x.unlimeted && (
                            <span className="atbd_color-success">Sınırsız</span>
                          )}
                          {x.count && x.count} {x.name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="price_action m-top-25">
                    <NavLink
                      to="/advanced"
                      className="btn btn-block btn-secondary price_action--btn"
                    >
                      Hemen Başla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing pricing--1 ">
                <div className="pricing__title">
                  <h4>Pro</h4>
                </div>
                <div className="pricing__price rounded">
                  <p className="pricing_value">
                    <sup>₺</sup>16.90<small> / 30 gün</small>
                  </p>
                  <p className="pricing_subtitle">Tek Paket</p>
                  {/* <!-- <p className="pricing_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora!</p> --> */}
                </div>
                <div className="pricing__features">
                  <ul className="list-unstyled">
                    {proEditions.map(x => {
                      return (
                        <li>
                          {x.status ? (
                            <span className="la la-check available"></span>
                          ) : (
                            <span className="la la-times unavailable"> </span>
                          )}
                          {x.unlimeted && (
                            <span className="atbd_color-success">Sınırsız</span>
                          )}
                          {x.count && x.count} {x.name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="price_action m-top-25">
                    <NavLink
                      to="/enterprise"
                      className="btn btn-block btn-outline-secondary price_action--btn"
                    >
                      Hemen Başla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ justifyContent: "center" }} className="row">
            <div className="col-md-4">
              <div className="pricing pricing--1 ">
                <div className="pricing__title">
                  <h4>Platinium</h4>
                </div>
                <div className="pricing__price rounded">
                  <p className="pricing_value">
                    <sup>₺</sup>29.90<small> / 30 gün</small>
                  </p>
                  <p className="pricing_subtitle">Tek Paket</p>
                  {/* <!-- <p className="pricing_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora!</p> --> */}
                </div>
                <div className="pricing__features">
                  <ul className="list-unstyled">
                    {platiniumEditions.map(x => {
                      return (
                        <li>
                          {x.status ? (
                            <span className="la la-check available"></span>
                          ) : (
                            <span className="la la-times unavailable"> </span>
                          )}
                          {x.unlimeted && (
                            <span className="atbd_color-success">Sınırsız</span>
                          )}
                          {x.count && x.count} {x.name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="price_action m-top-25">
                    <NavLink
                      to="/enterprise"
                      className="btn btn-block btn-outline-secondary price_action--btn"
                    >
                      Hemen Başla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing pricing--1 ">
                <div className="pricing__title">
                  <h4>Sınırsız</h4>
                </div>
                <div className="pricing__price rounded">
                  <p className="pricing_value">
                    <sup>₺</sup>159.90<small> / 30 gün</small>
                  </p>
                  <p className="pricing_subtitle">Tek Paket</p>
                  {/* <!-- <p className="pricing_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora!</p> --> */}
                </div>
                <div className="pricing__features">
                  <ul className="list-unstyled">
                    {unlimitedEditions.map(x => {
                      return (
                        <li>
                          {x.status ? (
                            <span className="la la-check available"></span>
                          ) : (
                            <span className="la la-times unavailable"> </span>
                          )}
                          {x.unlimeted && (
                            <span className="atbd_color-success">Sınırsız</span>
                          )}
                          {x.count && x.count} {x.name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="price_action m-top-25">
                    <NavLink
                      to="/enterprise"
                      className="btn btn-block btn-outline-secondary price_action--btn"
                    >
                      Hemen Başla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps)(PricingPlan);
