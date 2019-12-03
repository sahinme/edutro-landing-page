import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const img = "./assets/img/p1.jpg";
const list = 10;

class CategoryWidget extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        {categories.map(x => {
          return (
            <div className="col-lg-4 col-sm-6" key={x.id}>
              <div className="category-single category--img">
                <figure className="category--img4">
                  <img src={img} alt="" />
                  <figcaption className="overlay-bg">
                    <NavLink to={"/category-detail" + x.id} className="cat-box">
                      <div>
                        <div className="icon">
                          <span className={"la " + "la-laptop"}></span>
                        </div>
                        <h4 className="cat-name">{x.displayName}</h4>
                        <span className="badge badge-pill badge-success">
                          {list} Listings
                        </span>
                      </div>
                    </NavLink>
                  </figcaption>
                </figure>
              </div>
              {/*<!-- ends: .category-single -->*/}
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default CategoryWidget;
