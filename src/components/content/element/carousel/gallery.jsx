import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

const galleryData = [
  {
    img: "https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png",
    id: 1
  },
  {
    img: "https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png",
    id: 2
  },
  {
    img: "https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png",
    id: 3
  },
  {
    img: "https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png",
    id: 4
  },
  {
    img: "https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png",
    id: 5
  }
];

class Gallery extends Component {
  render() {
    return (
      <Fragment>
        <div className="atbdb_content_module_contents">
          <div className="gallery-wrapper">
            <div className="gallery-images">
              {Object.values(galleryData).map((value, key) => {
                const { img } = value;
                return (
                  <div className="single-image" key={key}>
                    <img
                      style={{ width: "670px", height: "440px" }}
                      src={img}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="gallery-thumbs">
              {Object.values(galleryData).map((value, key) => {
                const { img } = value;
                return (
                  <div className="single-thumb" key={key}>
                    <img src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    gallery: state.gallery,
    gallery2: state.gallery2
  };
};
export default Gallery;
