import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = e => e.preventDefault();
class BlogGrid4 extends Component {
  render() {
    const { blog } = this.props;
    return (
      <Fragment>
        {Object.values(blog).map((value, key) => {
          const { imgSrc, title, date, content, id } = value;
          return (
            <div className="col-lg-4 col-md-6" key={key}>
              <div className="grid-single">
                <div className="card post--card shadow-sm">
                  <figure>
                    <NavLink to={"/blog-details" + id}>
                      <img src={imgSrc} alt="" />
                    </NavLink>
                  </figure>
                  <div className="card-body">
                    <h6 style={{ fontWeight: "700" }}>
                      <NavLink to={"/blog-details" + id}>{title}</NavLink>
                    </h6>
                    <ul className="post-meta d-flex list-unstyled">
                      <li>{date}</li>
                      <li>
                        in{" "}
                        <NavLink to={"/blog-details" + id} onClick={noAction}>
                          Industry
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="post-meta d-flex list-unstyled">
                      <li>
                        <NavLink to="#" onClick={noAction}>
                          Bilgi Akademi
                        </NavLink>
                      </li>
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
                    <p>{content.split("").slice(0, 130)}...</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default BlogGrid4;
