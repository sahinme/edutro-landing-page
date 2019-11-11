import React, { Component, Fragment } from "react";
const noAction = e => e.preventDefault();

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const column = data.map(x => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="atbd_avatar_wrapper">
        <div className="atbd_review_avatar">
          <img
            alt=""
            src="./assets/img/review-author-thumb.jpg"
            className="avatar avatar-32 photo"
          />
        </div>
        <div className="atbd_name_time">
          <p>Mark Rose</p>
          <span className="review_time">6 hours ago</span>
        </div>
      </div>
    </div>
  );
});
export class ContactInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="atbd_location_grid_wrap">
          <div className="container">
            <div className="row">{column}</div>
          </div>
          {/*<!-- ends: .atbd_location_grid_wrap -->*/}
        </div>
      </Fragment>
    );
  }
}
