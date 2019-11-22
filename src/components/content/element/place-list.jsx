import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { cities } from "../../page/Dashboard/data/cities";

const noAction = e => e.preventDefault();
export class PlaceList extends Component {
  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  render() {
    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="place-list-wrapper">
            <ul className="list-unstyled">
              {cities.map((x, y) => {
                return (
                  <li>
                    <NavLink to="/activities">
                      {this.jsUcfirst(x)} ({y})
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
