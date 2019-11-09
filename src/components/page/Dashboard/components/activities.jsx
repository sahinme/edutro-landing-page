import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel2";
import { NavLink } from "react-router-dom";
import CourseCard from "../../../content/element/courseCard";
import ActivityCard from "../../../content/element/activityCard";
const noAction = e => e.preventDefault();

const options = {
  items: 5,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 5,
      nav: true,
      loop: true
    }
  },
  navText: [
    '<span class="i la la-long-arrow-left"></span>',
    '<span class="i la la-long-arrow-right"></span>'
  ],
  navElement: "button",
  loop: true
};

const data = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1];
const img = "./assets/img/p1.jpg";
const rating = 2;
const badge = "";
const title = "sdasd";
const location = "sdfsdf";
const price = 12.1;
const phone = 121212;
const opCl = "12";
const id = 1;

const logdIn = null;

class Activities extends Component {
  render() {
    return (
      <Fragment>
        <OwlCarousel
          options={options}
          className="testimonial-carousel owl-carousel"
        >
          {data.map((value, index) => {
            return <ActivityCard></ActivityCard>;
          })}
        </OwlCarousel>
      </Fragment>
    );
  }
}

export default Activities;
