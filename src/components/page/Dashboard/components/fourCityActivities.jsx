import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const noAction = e => e.preventDefault();

const data = [
  { name: "ankara", act: 20, img: "./assets/img/place1.jpg" },
  { name: "istanbul", act: 20, img: "./assets/img/place1.jpg" },
  { name: "izmir", act: 20, img: "./assets/img/place1.jpg" },
  { name: "bursa", act: 20, img: "./assets/img/place1.jpg" }
];

class FourCityActivities extends Component {
  render() {
    const { place } = this.props;
    return (
      <Fragment>
        {data.map((value, key) => {
          const { img, name, act } = value;
          return (
            <div className="category-place-single" key={name}>
              <figure>
                <NavLink to="/activities">
                  <img src={img} alt="" />
                </NavLink>
                <figcaption>
                  <h3>{name.toUpperCase()}</h3>
                  <p>{act} etkinlik</p>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    place: state.place
  };
};
export default connect(mapStateToProps)(FourCityActivities);
