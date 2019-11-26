import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel2";
import { NavLink } from "react-router-dom";
import CourseCard from "../../../content/element/courseCard";
import ActivityCard from "../../../content/element/activityCard";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";
const noAction = e => e.preventDefault();

const options = {
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

@inject(Stores.DashboardStore)
@observer
class Activities extends Component {
  render() {
    return (
      <Fragment>
        <OwlCarousel
          options={options}
          className="testimonial-carousel owl-carousel"
        >
          {this.props.dashboardStore.upcomingEvents.map((value, index) => {
            return (
              <ActivityCard
                title={value.title}
                price={value.price}
                locationName={value.locationName}
                startDate={value.startDate}
                ownerName={value.ownerInfo[0].name}
                ownerId={value.ownerInfo[0].id}
                logoPath={value.ownerInfo[0].logoPath}
                key={index}
                profession={value.ownerInfo[0].profession}
              ></ActivityCard>
            );
          })}
        </OwlCarousel>
      </Fragment>
    );
  }
}

export default Activities;
