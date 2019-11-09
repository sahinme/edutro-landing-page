import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const img = "./assets/img/p1.jpg";
const rating = 2;
const badge = "Konferans";
const title = "Yasam Koclugu Konferansi";
const location = "Ankara";
const price = 50.0;
const id = 1;
const phone = "545 47 83";

class ActivityCard extends Component {
  render() {
    return (
      <Fragment>
        <div /* className="col-lg-4 col-sm-6" */ key="1">
          <div className="atbd_single_listing ">
            <article className="atbd_single_listing_wrapper">
              <figure className="atbd_listing_thumbnail_area">
                <div className="atbd_listing_image">
                  <a href=" ">
                    <img src={img} alt="listingimage" />
                  </a>
                </div>
                {/*<!-- ends: .atbd_listing_image -->*/}
                <div className="atbd_author atbd_author--thumb">
                  <a href=" ">
                    <img
                      src="./assets/img/author-thumb2.jpg"
                      alt="AuthorImage"
                    />
                    <span className="custom-tooltip">Jeffery A, Owner</span>
                  </a>
                </div>
                <div className="atbd_thumbnail_overlay_content">
                  <ul className="atbd_upper_badge">
                    <li>
                      <span
                        className={
                          "text-capitalize atbd_badge atbd_badge_" + badge
                        }
                      >
                        {badge}
                      </span>
                    </li>
                  </ul>
                  {/*<!-- ends .atbd_upper_badge -->*/}
                </div>
                {/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
              </figure>
              {/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
              <div className="atbd_listing_info">
                <Fragment>
                  <div className="atbd_content_upper">
                    <h4 className="atbd_listing_title">
                      <NavLink to={"/listing-details" + id}>{title}</NavLink>
                    </h4>
                    <div
                      style={{ justifyContent: "space-between" }}
                      className="atbd_listing_meta"
                    >
                      <span className="atbd_meta atbd_listing_price">
                        {"$ " + price}
                      </span>
                      <span className="la la-user">900 kişi katıldı</span>
                    </div>
                    <div className="atbd_listing_data_list">
                      <ul>
                        <li>
                          <p>
                            <span className="la la-map-marker"></span>
                            {location}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="la la-calendar-check-o"></span>
                            12.01.2020
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/*<!-- End atbd listing meta -->*/}
                  </div>
                  <div className="atbd_listing_bottom_content">
                    <div className="atbd_content_left">
                      <div className="atbd_listing_category">
                        <NavLink
                          onClick={() => {}}
                          to="/at_demo"
                          className="btn btn-gradient btn-gradient-two"
                          style={{ color: "white" }}
                        >
                          Etkinliğe katıl
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Fragment>
              </div>
              {/*<!-- ends: .atbd_listing_info -->*/}
            </article>
            {/*<!-- atbd_single_listing_wrapper -->*/}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ActivityCard;
