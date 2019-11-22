import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "antd";

const img = "./assets/img/p1.jpg";
const rating = 2;
const badge = "sponsorlu";
const title = "Yasam Koclugu Egitimi";
const location = "Ankara";
const price = "2.120";
const id = 1;

const values = {
  name: "Enes Sahin",
  profession: "Aile ve Evlilik Danismani - NLP Trainer",
  comment: 20,
  likes: 150
};

class EducatorCard extends Component {
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
                <div>
                  <div
                    style={{ right: "10px" }}
                    className="atbd_author atbd_author--thumb"
                  >
                    <a href=" ">
                      <img
                        className="rosset_image"
                        src="./assets/img/svg/medal.svg"
                        alt="AuthorImage"
                      />
                      <span className="custom-tooltip">{values.name}</span>
                    </a>
                  </div>

                  <div
                    style={{ right: "57px" }}
                    className="atbd_author atbd_author--thumb"
                  >
                    <a href=" ">
                      <img
                        className="rosset_image"
                        src="./assets/img/svg/22-award.svg"
                        alt="AuthorImage"
                      />
                      <span className="custom-tooltip">{values.name}</span>
                    </a>
                  </div>

                  <div
                    style={{ right: "105px" }}
                    className="atbd_author atbd_author--thumb"
                  >
                    <a href=" ">
                      <img
                        className="rosset_image"
                        src="./assets/img/svg/26-gold medal.svg"
                        alt="AuthorImage"
                      />
                      <span className="custom-tooltip">{values.name}</span>
                    </a>
                  </div>

                  <div
                    style={{ right: "153px" }}
                    className="atbd_author atbd_author--thumb"
                  >
                    <a href=" ">
                      <img
                        className="rosset_image"
                        src="./assets/img/svg/30-crown.svg"
                        alt="AuthorImage"
                      />
                      <span className="custom-tooltip">{values.name}</span>
                    </a>
                  </div>
                </div>

                {/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
              </figure>
              {/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
              <div className="atbd_listing_info">
                <Fragment>
                  <div className="atbd_content_upper">
                    <h4 className="atbd_listing_title">
                      <NavLink to={"/course-details" + id}>
                        {values.name}
                      </NavLink>
                    </h4>
                    <div className="atbd_listing_meta">
                      <span className="atbd_meta atbd_listing_rating">
                        {values.likes}
                        <i className="la la-star"></i>
                      </span>
                      <span className="atbd_meta atbd_listing_rating">
                        {values.comment}
                        <i className="la la-comment"></i>
                      </span>
                    </div>
                    <div className="atbd_listing_data_list">
                      <ul>
                        <li>
                          <p>{values.profession}</p>
                        </li>
                      </ul>

                      <ul>
                        <Divider style={{ margin: "4px 0" }}></Divider>
                        <li>
                          <p>
                            <NavLink style={{ color: "#EA5352" }} to="#">
                              <span className="la la-user"></span>
                              Profili gör
                            </NavLink>
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

export default EducatorCard;
