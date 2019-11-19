import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionCard from "./questionCard";

const noAction = e => e.preventDefault();
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, , 1, 1, 1, 1, 1, 1, 1];
class QuestionGrid extends Component {
  render() {
    const { list, logdIn } = this.props;
    return (
      <Fragment>
        {data.map((value, key) => {
          return <QuestionCard></QuestionCard>;
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
export default connect(mapStateToProps)(QuestionGrid);
