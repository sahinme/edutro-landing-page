import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel2";
import { NavLink } from "react-router-dom";
import CourseCard from "../../../content/element/courseCard";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";
const noAction = e => e.preventDefault();

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

/* @inject(Stores.DashboardStore)
@observer */
class SponsoredCourses extends Component {
  render() {
    return (
      <Fragment>
        <OwlCarousel
          options={options}
          className="testimonial-carousel owl-carousel"
        >
          {this.props.advertisingCourses.map((value, index) => {
            const { courseInfo } = value;
            return (
              <CourseCard
                title={courseInfo.title}
                startDate={courseInfo.startDate}
                price={courseInfo.price}
                key={value.courseInfo.id}
                score={courseInfo.score}
                id={courseInfo.id}
                location={courseInfo.locationName}
                logoPath={courseInfo.courseOwnerInfo[0].logoPath}
                ownerName={courseInfo.courseOwnerInfo[0].name}
              ></CourseCard>
            );
          })}
        </OwlCarousel>
      </Fragment>
    );
  }
}

export default SponsoredCourses;
