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

class PopularCourses extends Component {
  render() {
    const { courses } = this.props;
    return (
      <Fragment>
        {courses && (
          <OwlCarousel
            options={options}
            className="testimonial-carousel owl-carousel"
          >
            {courses.map((value, index) => {
              return (
                <CourseCard
                  title={value.title}
                  startDate={value.startDate}
                  price={value.price}
                  key={value.id}
                  score={value.score}
                  id={value.id}
                  location={value.locationName}
                  logoPath={
                    value &&
                    value.courseOwnerInfo &&
                    value.courseOwnerInfo[0] &&
                    value.courseOwnerInfo[0].logoPath
                  }
                  ownerName={
                    value &&
                    value.courseOwnerInfo &&
                    value.courseOwnerInfo[0] &&
                    value.courseOwnerInfo[0].name
                  }
                ></CourseCard>
              );
            })}
          </OwlCarousel>
        )}
      </Fragment>
    );
  }
}

export default PopularCourses;
