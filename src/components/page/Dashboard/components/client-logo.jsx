import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 5,
  nav: false,
  dots: false,
  margin: 100,
  responsive: {
    0: {
      items: 2
    },
    575: {
      items: 3
    },
    767: {
      items: 3
    },
    991: {
      items: 5
    }
  }
};

const data = [1, 1, 1, , 1, 1];

class ClientLogo extends Component {
  render() {
    const { client } = this.props;
    return (
      <Fragment>
        <OwlCarousel options={options} className="logo-carousel owl-carousel">
          {data.map((value, key) => {
            const { img } = value;
            return (
              <div className="carousel-single" key={key}>
                <img src={img} alt="" />
              </div>
            );
          })}
        </OwlCarousel>
      </Fragment>
    );
  }
}

export default ClientLogo;
