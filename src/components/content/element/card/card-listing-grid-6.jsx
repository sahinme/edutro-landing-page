import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const img = "https://i.udemycdn.com/course/240x135/1258436_2dc3_4.jpg";
const badge = "sponsorlu";

class ListingCardGrid6 extends Component {
  render() {
    const {
      title,
      ownerName,
      price,
      startDate,
      score,
      logoPath,
      location,
      id,
      key,
      categoryName
    } = this.props;
    return (
      <Fragment>
        <div className="col-lg-6 col-sm-6" key={key}>
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
                      style={{
                        backgroundColor: "white",
                        width: "40px",
                        height: "40px"
                      }}
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
                        {categoryName}
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
                        to={"/course-details" + id}
                      >
                        {title}
                      </NavLink>
                    </h4>
                    <div className="atbd_listing_meta">
                      <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <span style={{ marginLeft: "5px" }}>4.3</span>
                      <span>
                        <span style={{ marginLeft: "5px" }}>
                          <i
                            style={{
                              color: "#fa8b0c",
                              marginLeft: "5px"
                            }}
                            className="la la-comment"
                          ></i>
                        </span>
                        <span style={{ marginLeft: "5px" }}>(182)</span>
                      </span>
                    </div>
                    <span
                      style={{ textDecoration: "line-through" }}
                      className="atbd_meta atbd_listing_price"
                    >
                      {"₺" + Math.round(price * 100) / 100}
                    </span>
                    <span
                      style={{
                        marginLeft: "13px",
                        fontSize: "17px",
                        fontWeight: "700"
                      }}
                      className="atbd_meta atbd_listing_price"
                    >
                      {"₺" + price.toFixed(2)}
                    </span>
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

const mapStateToProps = state => {
  return {
    list: state.list
  };
};
export default ListingCardGrid6;
