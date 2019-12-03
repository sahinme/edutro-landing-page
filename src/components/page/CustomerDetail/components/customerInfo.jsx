import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const noAction = e => e.preventDefault();

class CustomerInfo extends Component {
  render() {
    const { informations } = this.props;
    return (
      <Fragment>
        <div className="widget atbd_widget widget-card">
          <div className="atbd_widget_title">
            <h4>
              <span className="la la-phone"></span>Bilgiler
            </h4>
          </div>
          {/*<!-- ends: .atbd_widget_title -->*/}
          <div className="widget-body atbd_author_info_widget">
            <div className="atbd_widget_contact_info">
              <ul>
                <li>
                  <span className="la la-map-marker"></span>
                  <span className="atbd_info">{informations.address}</span>
                </li>
                <li>
                  <span className="la la-globe"></span>
                  <NavLink
                    to="/at_demo"
                    onClick={noAction}
                    className="atbd_info"
                  >
                    www.atlantisdanismanlik.com
                  </NavLink>
                </li>
                <li>
                  <div className="widget atbd_widget widget_claim_listing">
                    <NavLink
                      onClick={noAction}
                      to="/at_demo"
                      className="btn btn-block btn-gradient btn-gradient-two btn-lg claim-btn"
                      data-toggle="modal"
                      data-target="#moda_claim_listing"
                    >
                      İletişime Geç
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
            {/*<!-- ends: .atbd_widget_contact_info -->*/}
            <div className="atbd_social_wrap">
              <p>
                <NavLink to="/at_demo" onClick={noAction}>
                  <span className="fab fa-facebook-f"></span>
                </NavLink>
              </p>
              <p>
                <NavLink to="/at_demo" onClick={noAction}>
                  <span className="fab fa-twitter"></span>
                </NavLink>
              </p>
              <p>
                <NavLink to="/at_demo" onClick={noAction}>
                  <span className="fab fa-linkedin-in"></span>
                </NavLink>
              </p>
            </div>
            {/*<!-- ends: .atbd_social_wrap -->*/}
          </div>
          {/*<!-- ends: .widget-body -->*/}
        </div>
      </Fragment>
    );
  }
}

export default CustomerInfo;
