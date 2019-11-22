import React, { Component, Fragment } from "react";
import ScoreBar from "./scoreBar";

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

const categories = [1, 2, 2, 2, 4, 5, 6, 7].map((x, index) => {
  return (
    <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
      <input type="checkbox" className="custom-control-input" id={index} />
      <label className="custom-control-label" htmlFor={index}>
        {x % 2 == 0 ? "Yazilim" : "Saglikli Yasam"}
      </label>
    </div>
  );
});

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

const noAction = e => e.preventDefault();

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-lg-4 order-lg-0 order-1 mt-5 mt-lg-0">
          <div className="listings-sidebar">
            <div className="search-area default-ad-search">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={this.props.searchPlaceholder}
                    className="form-control"
                    onChange={search}
                  />
                </div>
                {/*<!-- ends: .form-group -->*/}

                <div className="form-group">
                  <div className="select-basic">
                    <select className="form-control" onChange={category}>
                      <option value="All">Kategori Seç</option>
                      {Object.values([
                        { category: "1" },
                        { category: "2" }
                      ]).map((value, key) => {
                        return (
                          <option key={key} value={value.category}>
                            {value.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <div className="position-relative">
                    <input
                      onChange={search}
                      type="text"
                      placeholder="Şehir ?"
                      className="form-control location-name"
                    />
                    <button type="submit" className="locator">
                      <span className="la la-crosshairs"></span>
                    </button>
                  </div>
                </div>

                <div className="form-group p-bottom-10">
                  <div className="price-range rs-primary">
                    <p className="d-flex justify-content-between">
                      <span>Fiyat Aralığı: </span>
                      <span className="amount" id="amount1"></span>
                    </p>
                    <div className="slider-range"></div>
                  </div>
                  {/*<!-- ends: .price-range -->*/}
                </div>
                {/*<!-- ends: .form-group -->*/}

                <div className="check-btn">
                  <div className="btn-checkbox active-color-secondary">
                    <label>
                      <input type="checkbox" value="1" onClick={range} />
                      <span className="color-primary">
                        <i className="la la-search"></i> Ara
                      </span>
                    </label>
                  </div>
                </div>

                <div className="filter-checklist">
                  <h5>Kategoriler</h5>
                  <div className="checklist-items feature-checklist hideContent">
                    {categories}
                  </div>
                  <a href=" " className="show-link">
                    Daha fazla
                  </a>
                </div>

                <div className="filter-checklist">
                  <h5>Puana göre sırala</h5>
                  <ScoreBar></ScoreBar>
                </div>
                <a
                  href=" "
                  onClick={noAction}
                  className="btn btn-gradient btn-gradient-two btn-block btn-icon icon-right m-top-40"
                >
                  Filtreleri Uygula{" "}
                  <span className="la la-long-arrow-right"></span>
                </a>
              </form>
              {/*<!-- ends: form -->*/}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Sidebar;
