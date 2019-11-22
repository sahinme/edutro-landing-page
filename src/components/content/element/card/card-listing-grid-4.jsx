import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CourseCard from "../courseCard";
const noAction = e => e.preventDefault();
class ListingCardGrid4 extends Component {
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
            return <CourseCard></CourseCard>;
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
export default ListingCardGrid4;
