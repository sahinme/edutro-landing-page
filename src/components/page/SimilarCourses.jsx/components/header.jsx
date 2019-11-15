import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const sort = [];
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
    Object.values(this.props.data).map(item => {
      return sort.push(item);
    });
    return (
      <Fragment>
        <div className="atbd_generic_header">
          <div className="atbd_generic_header_title">
            <h4>Benzer Egitimler</h4>
            <p>Toplam 59 sonuç gösteriliyor</p>
          </div>
          <div className="atbd_listing_action_btn btn-toolbar" role="toolbar">
            <div className="view-mode">
              <NavLink className="action-btn active" to="all-listings-grid">
                <span className="la la-th-large"></span>
              </NavLink>
              <NavLink className="action-btn" to="all-listings-list">
                <span className="la la-list"></span>
              </NavLink>
            </div>
            {/* <!-- Orderby dropdown --> */}
            <div className="dropdown">
              <a
                className="action-btn dropdown-toggle"
                href=" "
                role="button"
                id="dropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filtrele <span className="caret"></span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink2"
              >
                <a className="dropdown-item" onClick={sorting} href="a-z">
                  A to Z ( title )
                </a>
                <a className="dropdown-item" onClick={sorting} href="z-a">
                  Z to A ( title )
                </a>
                <a className="dropdown-item" onClick={sorting} href="new">
                  Latest listings
                </a>
                <a className="dropdown-item" onClick={sorting} href="old">
                  Oldest listings
                </a>
                <a className="dropdown-item" onClick={sorting} href="low">
                  Price ( low to high )
                </a>
                <a className="dropdown-item" onClick={sorting} href="heigh">
                  Price ( high to low )
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
