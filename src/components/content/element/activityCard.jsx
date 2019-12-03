import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const img = "https://i.udemycdn.com/course/240x135/2015076_2944_2.jpg";
const badge = "Konferans";
const id = 1;

class ActivityCard extends Component {
  render() {
    const {
      /* img */
      title,
      logoPath,
      locationName,
      price,
      key,
      startDate,
      ownerName,
      profession
    } = this.props;
    return (
      <Fragment>
        <div /* className="col-lg-4 col-sm-6" */ key={key}>
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
                      style={{ width: "50px", height: "auto" }}
                      src={logoPath}
                      alt="AuthorImage"
                    />
                    <span className="custom-tooltip">
                      {ownerName} <br />
                      {profession && profession}
                    </span>
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
                      <NavLink
                        className="course_title"
                        to={"/listing-details" + id}
                      >
                        {title}
                      </NavLink>
                    </h4>
                    <div
                      style={{ justifyContent: "space-between" }}
                      className="atbd_listing_meta"
                    >
                      <span className="atbd_meta atbd_listing_price">
                        {price == 0 ? "ücretsiz" : "₺ " + price}
                      </span>
                      <span className="la la-user">900 kişi katıldı</span>
                    </div>
                    <div className="atbd_listing_data_list">
                      <ul>
                        <li>
                          <p>
                            <span className="la la-map-marker"></span>
                            {locationName}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="la la-calendar-check-o"></span>
                            {moment(startDate).format("L")}
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
