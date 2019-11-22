import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ActivityListingCard from "./activityListingCard";
import $ from "jquery";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/theme.css";
import "jquery-ui/themes/base/slider.css";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/slider";
import { Pagination } from "../../content/element/pagination";
import Header from "../SimilarCourses.jsx/components/header";
import Sidebar from "../SimilarCourses.jsx/components/sidebar";

const noAction = e => e.preventDefault();

class ActivityListing extends Component {
  state = {
    list: this.props.list,
    cate: this.props.list,
    count: 0,
    perPage: 4,
    data: {}
  };

  abcupdate = data => {
    setTimeout(() => {
      this.setState({
        data: { ...data }
      });
    }, 1000);
  };

  componentDidMount() {
    $(document).ready(() => {
      //Range slider light
      var slider_range = $(".slider-range");
      slider_range.each(function() {
        $(this).slider({
          range: true,
          min: 0,
          max: 500,
          values: [0, 500],
          slide: function(event, ui) {
            $(".amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
          }
        });
      });
      $(".amount").text(
        "$" +
          slider_range.slider("values", 0) +
          " - $" +
          slider_range.slider("values", 1)
      );
    });

    this.abcupdate();
  }

  render() {
    const logdIn = () => {
      return this.props.login;
    };

    // sorting here
    const sort = [];
    Object.values(this.state.list).map(item => {
      return sort.push(item);
    });

    const sorting = e => {
      e.preventDefault();

      switch (e.target.getAttribute("href")) {
        case "heigh":
          this.setState({
            list: sort.sort(function(a, b) {
              var textA = a.price;
              var textB = b.price;

              if (textA < textB) return 1;
              if (textA > textB) return -1;
              return 0;
            })
          });

          break;
        case "low":
          this.setState({
            list: sort.sort(function(a, b) {
              var textA = a.price;
              var textB = b.price;

              if (textA < textB) return -1;
              if (textA > textB) return 1;
              return 0;
            })
          });
          break;
        case "a-z":
          this.setState({
            list: sort.sort(function(a, b) {
              var textA = a.title;
              var textB = b.title;

              if (textA < textB) return -1;
              if (textA > textB) return 1;
              return 0;
            })
          });
          break;

        case "z-a":
          this.setState({
            list: sort.sort(function(a, b) {
              var textA = a.title;
              var textB = b.title;

              if (textA < textB) return 1;
              if (textA > textB) return -1;
              return 0;
            })
          });
          break;
        default:
          this.setState({
            list: this.state.cate
          });
      }
    };
    // sorting end

    // filter by search
    const search = e => {
      e.preventDefault();
      const value = e.target.value.toLowerCase();
      this.setState({
        list: Object.values(this.props.list).filter(function(item) {
          return item.title.toLowerCase().startsWith(value) ||
            item.location.toLowerCase().startsWith(value)
            ? item
            : "";
        })
      });
    };
    // filter by search

    // filter by category
    const category = e => {
      // e.preventDefault();
      const filter = Object.values(this.props.list).filter(item => {
        return item.category === e.target.value;
      });
      if (e.target.value !== "All") {
        this.setState({
          list: filter
        });
      } else {
        this.setState({
          list: this.props.list
        });
      }
    };

    // filter by price range
    const range = e => {
      e.preventDefault();
      const value = document.getElementById("amount1").innerHTML;
      const max = value
        .split("-")
        .pop()
        .split("$")
        .pop()
        .trim();
      const min = value
        .split("-")
        .shift()
        .split("$")
        .pop()
        .trim();

      this.setState({
        list: Object.values(this.props.list).filter(item1 => {
          return item1.price >= min && item1.price <= max;
        })
      });
    };
    // filter by price range end

    return (
      <Fragment>
        <section className="all-listing-wrapper section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Header title="Ankara ilindeki etkinlikler" data={[]}></Header>
              </div>{" "}
              {/*<!-- ends: .col-lg-12 -->*/}
              <div className="col-lg-12 listing-items">
                <div className="row">
                  <Sidebar searchPlaceholder="Etkinlik arayin..."></Sidebar>
                  {/* wiget */}
                  <div className="col-lg-8 order-lg-1 order-0">
                    <div className="row">
                      {Object.values(this.state.list).length ? (
                        <Fragment>
                          <ActivityListingCard
                            list={this.state.list}
                            logdIn={logdIn()}
                          />
                        </Fragment>
                      ) : (
                        <div className="col-lg-12">
                          <div className="alert alert-warning" role="alert">
                            Data Not found!
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    login: state.login
  };
};
export default connect(mapStateToProps)(ActivityListing);
