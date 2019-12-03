import React, { Component, Fragment } from "react";
import CustomerCourseCard from "./customerCourseCard";
import { connect } from "react-redux";

class CustomerCoursesGrid extends Component {
  render() {
    const { courses } = this.props;
    return (
      <Fragment>
        {courses &&
          courses.map((value, key) => {
            const { startDate, title, locationName, price, id, score } = value;
            return (
              <CustomerCourseCard
                title={title}
                startDate={startDate}
                price={price}
                key={id}
                score={score}
                id={id}
                location={locationName}
              ></CustomerCourseCard>
            );
          })}
      </Fragment>
    );
  }
}

export default CustomerCoursesGrid;
