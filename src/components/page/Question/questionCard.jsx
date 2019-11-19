import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const img = "./assets/img/p1.jpg";
const rating = 2;
const badge = "sponsorlu";
const title = "Yasam Koclugu Egitimi";
const location = "Ankara";
const price = "2.120";
const id = 1;

class QuestionCard extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="card bg-light mb-3"
          style={{ maxWidth: "18rem", margin: "10px" }}
        >
          <div style={{ backgroundColor: "#5f70916b" }} className="card-header">
            <a href="#" className="badge badge-danger">
              Yazilim
            </a>
          </div>
          <div className="card-body">
            <NavLink to="/ques-detail">
              <h5 className="card-title">
                Javascript ile hoisting nasil oluyor
              </h5>
            </NavLink>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <ul className="post-meta d-flex list-unstyled">
              <li style={{ display: "flex" }}>
                <p>281</p>
                <i style={{ color: "#EA5352" }} className="la la-heart"></i>
              </li>
              <li style={{ display: "flex" }}>
                <p>19</p>
                <i style={{ color: "#fa8b0c" }} className="la la-comment"></i>
              </li>
            </ul>
            <button type="button" class="btn btn-outline-primary">
              İncele
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default QuestionCard;
