import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const img = "./assets/img/p1.jpg";
const badge = "sponsorlu";

class CourseCard extends Component {
  render() {
    const {
      title,
      ownerName,
      price,
      startDate,
      score,
      key,
      logoPath,
      location,
      id
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
                      style={{ width: "40px", height: "40px" }}
                      src={logoPath}
                      alt="AuthorImage"
                    />
                    <span className="custom-tooltip">{ownerName}</span>
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
                      <NavLink to={"/course-details/" + id}>{title}</NavLink>
                    </h4>
                    <div className="atbd_listing_meta">
                      <span className="atbd_meta atbd_listing_rating">
                        {score}
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
                            {moment(startDate).format("L")}
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

export default CourseCard;
