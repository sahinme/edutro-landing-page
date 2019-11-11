import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const img = "./assets/img/p1.jpg";
const rating = 2;
const badge = "sponsorlu";
const title = "Yasam Koclugu Egitimi";
const location = "Ankara";
const price = "2.120";
const id = 1;

class CustomerCourseCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="col col-lg-3" key="1">
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
                      <NavLink to={"/course-details" + id}>{title}</NavLink>
                    </h4>
                    <div className="atbd_listing_meta">
                      <span className="atbd_meta atbd_listing_rating">
                        {rating}
                        <i className="la la-star"></i>
                      </span>
                      <span className="atbd_meta atbd_listing_price">
                        {"₺ " + price}
                      </span>
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
                            11.02.2019 Cuma
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/*<!-- End atbd listing meta -->*/}
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

export default CustomerCourseCard;
