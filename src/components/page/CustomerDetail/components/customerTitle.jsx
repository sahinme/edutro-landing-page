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
    const { title } = this.props;
    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="atbd_auhor_profile_area">
            <div className="atbd_author_avatar">
              <img
                style={{ maxWidth: "120px", maxHeight: "120px" }}
                src={title.logoPath}
              />
              <div className="atbd_auth_nd">
                <h2>{title.tenantName}</h2>
                <p>{customerTitle}</p>
              </div>
            </div>
            {/*<!-- ends: .atbd_author_avatar -->*/}
            <div className="atbd_author_meta">
              <div className="atbd_listing_meta">
                <span className="atbd_meta atbd_listing_rating">
                  {title.score} <i className="la la-star"></i>
                </span>
                <p className="meta-info">
                  <span>{reviewCount}</span>Yorum
                </p>
              </div>
              <p className="meta-info">
                <span>{title.courses && title.courses.length}</span>Eğitim
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
