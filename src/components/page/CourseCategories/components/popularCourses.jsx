import React, { Component, Fragment } from "react";
import OwlCarousel from "react-owl-carousel2";
import CourseCard from "../../../content/element/courseCard";

const options = {
  items: 6,
  dots: false,
  nav: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
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
      items: 6,
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

class PopularCourses extends Component {
  render() {
    return (
      <Fragment>
        <OwlCarousel
          options={options}
          className="testimonial-carousel owl-carousel"
        >
          {data.map((value, index) => {
            return <CourseCard></CourseCard>;
          })}
        </OwlCarousel>
      </Fragment>
    );
  }
}

export default PopularCourses;
