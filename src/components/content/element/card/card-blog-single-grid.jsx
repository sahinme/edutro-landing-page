import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = e => e.preventDefault();
class BlogSingle extends Component {
  render() {
    const { blog } = this.props;
    return (
      <Fragment>
        <div className={"blog-single"} key="1">
          <div className="card post--card post--card2 ">
            <figure>
              <NavLink to={"/blog-details" + "id"}>
                <img src="" alt="" />
              </NavLink>
              <figcaption>
                <NavLink to={"/blog-details" + "id"}>
                  <i className="la la-image"></i>
                </NavLink>
              </figcaption>
            </figure>
            <div className="card-body">
              <h3>
                <NavLink to={"/blog-details" + "id"}>"sadsad"</NavLink>
              </h3>
              <ul className="post-meta list-unstyled">
                <li>sadsad</li>
                <li>
                  by{" "}
                  <NavLink to="/at_demo" onClick={noAction}>
                    Aazztech
                  </NavLink>
                </li>
                <li>
                  in{" "}
                  <NavLink to="/at_demo" onClick={noAction}>
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/at_demo" onClick={noAction}>
                    6 Comments
                  </NavLink>
                </li>
              </ul>
              <p>"sadsad"</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogSingle;
