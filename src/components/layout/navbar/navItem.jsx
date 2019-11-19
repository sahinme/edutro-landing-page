import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
export class NavItem extends Component {
  render() {
    return (
      <Fragment>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">Ana Sayfa</NavLink>
          </li>
          <li className="dropdown has_dropdown">
            <a
              href="# "
              className="dropdown-toggle"
              id="drop4"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Kategoriler
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop4">
              <li>
                <NavLink to="/all-categories">Eğitimler</NavLink>
              </li>
              <li>
                <NavLink to="/all-locations">Lokasyonlar</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/ques-answ">Soru & Cevap</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </Fragment>
    );
  }
}
