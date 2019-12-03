import React, { Component, Fragment } from "react";
import OwlCarousel from "react-owl-carousel2";
import CourseCard from "../../../content/element/courseCard";

const options = {
  items: 6,
  dots: false,
  nav: true,
  responsiveClass: true,
  autoplay: false,
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

class SponsoredCourses extends Component {
  render() {
    const { advertisingCourses } = this.props;
    return (
      <Fragment>
        {advertisingCourses && (
          <OwlCarousel
            options={options}
            className="testimonial-carousel owl-carousel"
          >
            {advertisingCourses.map((value, index) => {
              return (
                <CourseCard
                  title={value.courseInfo.title}
                  startDate={value.courseInfo.startDate}
                  price={value.courseInfo.price}
                  key={value.courseInfo.id}
                  score={value.courseInfo.score}
                  id={value.courseInfo.id}
                  location={value.courseInfo.locationName}
                  logoPath={value.courseInfo.courseOwnerInfo[0].logoPath}
                  ownerName={value.courseInfo.courseOwnerInfo[0].name}
                ></CourseCard>
              );
            })}
          </OwlCarousel>
        )}
      </Fragment>
    );
  }
}

export default SponsoredCourses;
