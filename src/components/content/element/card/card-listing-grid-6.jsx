import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = e => e.preventDefault();
class ListingCardGrid6 extends Component {
  render() {
    const { list, logdIn } = this.props;
    return (
      <Fragment>
        {Object.values(list).map((value, key) => {
          const { img, rating, badge, title, location, price, id } = value;
          return (
            <div className="col-lg-6 col-sm-6" key="1">
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
                          <NavLink to={"/listing-details" + id}>
                            {title}
                          </NavLink>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">
                            {rating}
                            <i className="la la-star"></i>
                          </span>
                          <span className="atbd_meta atbd_listing_price">
                            {"$ " + price}
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
                                20.10.2020
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/*<!-- End atbd listing meta -->*/}
                      </div>
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href=" ">
                              <span className="la la-pencil"></span>
                              Bilgi &amp; Kayıt
                            </a>
                          </div>
                        </div>
                        <span className="atbd_content_right">
                          <li className="atbd_count">
                            <span className="la la-eye"></span>900+
                          </li>
                          <li className="atbd_save">
                            <span className="la la-heart-o"></span>
                          </li>
                        </span>
                      </div>
                    </Fragment>
                  </div>
                  {/*<!-- ends: .atbd_listing_info -->*/}
                </article>
                {/*<!-- atbd_single_listing_wrapper -->*/}
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default ListingCardGrid6;
