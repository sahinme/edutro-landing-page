import React, { Component, Fragment } from "react";

const values = {
  customerName: "Atlantis Egitim ve Danismanlik",
  customerTitle: "Egitim ve Danismanlik Merkezi",
  courseCount: 20,
  reviewCount: 72
};

class CustomerTitle extends Component {
  render() {
    const { customerName, customerTitle, courseCount, reviewCount } = values;

    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="atbd_auhor_profile_area">
            <div className="atbd_author_avatar">
              <img src="./assets/img/author-profile.jpg" alt="AuthorImage" />
              <div className="atbd_auth_nd">
                <h2>{customerName}</h2>
                <p>{customerTitle}</p>
              </div>
            </div>
            {/*<!-- ends: .atbd_author_avatar -->*/}
            <div className="atbd_author_meta">
              <div className="atbd_listing_meta">
                <span className="atbd_meta atbd_listing_rating">
                  4.5 <i className="la la-star"></i>
                </span>
                <p className="meta-info">
                  <span>{reviewCount}</span>Yorum
                </p>
              </div>
              <p className="meta-info">
                <span>{courseCount}</span>Eğitim
              </p>
            </div>
            {/*<!-- ends: .atbd_author_meta -->*/}
          </div>
          {/*<!-- ends: .atbd_auhor_profile_area -->*/}
        </div>
      </Fragment>
    );
  }
}

export default CustomerTitle;
