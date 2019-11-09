import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const noAction = e => e.preventDefault();

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const column = data.map(x => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">
        Kisisel Gelisim (21)
      </NavLink>
    </div>
  );
});

export class PopularCategoryList extends Component {
  render() {
    return (
      <Fragment>
        <div className="atbd_location_grid_wrap">
          <div className="container">
            <div className="row">{column}</div>
          </div>
          {/*<!-- ends: .atbd_location_grid_wrap -->*/}
        </div>
      </Fragment>
    );
  }
}
