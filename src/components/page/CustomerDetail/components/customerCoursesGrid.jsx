import React, { Component, Fragment } from "react";
import CustomerCourseCard from "./customerCourseCard";
import { connect } from "react-redux";

class CustomerCoursesGrid extends Component {
  render() {
    const { list, logdIn } = this.props;
    return (
      <Fragment>
        {Object.values(list)
          .slice(0, 6)
          .map((value, key) => {
            const {
              img,
              rating,
              badge,
              title,
              location,
              price,
              phone,
              opCl,
              id
            } = value;
            return <CustomerCourseCard></CustomerCourseCard>;
          })}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.list
  };
};
export default  (CustomerCoursesGrid);
