import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const noAction = e => e.preventDefault();

class SimilarQuestions extends Component {
  render() {
    const data = [1, 1, 1, 1];
    return (
      <Fragment>
        <ul className="listings">
          {data.map((value, key) => {
            return (
              <li key={key}>
                <div className="atbd_left_img">
                  <NavLink to="key">
                    <img
                      src="./assets/img/p1.jpg"
                      style={{ width: "90px" }}
                      alt="listingimage"
                    />
                  </NavLink>
                </div>
                <div className="atbd_right_content">
                  <div className="cate_title">
                    <h4>
                      <NavLink to={"listing-details" + value}>
                        e supply a series of design principles, practical
                        patterns and high quality...
                      </NavLink>
                    </h4>
                  </div>
                  <ul className="post-meta d-flex list-unstyled">
                    <li style={{ display: "flex" }}>
                      <p>281</p>
                      <i
                        style={{ color: "#EA5352" }}
                        className="la la-heart"
                      ></i>
                    </li>
                    <li style={{ display: "flex" }}>
                      <p>19</p>
                      <i
                        style={{ color: "#fa8b0c" }}
                        className="la la-comment"
                      ></i>
                    </li>
                  </ul>
                  <p className="directory_tag">
                    <span className="la la-user" aria-hidden="true"></span>
                    <span>
                      <NavLink to="/at_demo" onClick={noAction}>
                        Kisisel Gelisim
                      </NavLink>
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
export default SimilarQuestions;
