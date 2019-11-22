import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { categories } from "../../../page/CourseCategories/categories";
const noAction = e => e.preventDefault();

const key = "1";
const img = "./assets/img/p1.jpg";
const icon = "la-cutlery";
const list = 10;
const category = "category";
class CategoryCardGrid4 extends Component {
  render() {
    return (
      <Fragment>
        {categories.map(x => {
          return (
            <div className="col-lg-4 col-sm-6" key={x.name}>
              <div className="category-single category--img">
                <figure className="category--img4">
                  <img src={img} alt="" />
                  <figcaption className="overlay-bg">
                    <NavLink
                      onClick={noAction}
                      to="/at_demo"
                      className="cat-box"
                    >
                      <div>
                        <div className="icon">
                          <span className={"la " + x.icon}></span>
                        </div>
                        <h4 className="cat-name">{x.name}</h4>
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
const mapStateToProps = state => {
  return {
    category: state.category
  };
};
export default CategoryCardGrid4;
