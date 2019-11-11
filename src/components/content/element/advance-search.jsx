import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = e => e.preventDefault();
export class AdvSearch extends Component {
  render() {
    return (
      <Fragment>
        <div className="directory_content_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="search_title_area">
                  <h2 className="title">Sana en uygun Eğitimi bul</h2>
                  <p className="sub_title">
                    Tüm şehirlerden – eğitim kurumlarından özel eğitmenlere ve
                    daha fazlasına...
                  </p>
                </div>
                {/* ends: .search_title_area */}
                <form action="/" className="search_form">
                  <div className="atbd_seach_fields_wrapper">
                    <div className="single_search_field search_query">
                      <input
                        className="form-control search_fields"
                        type="text"
                        placeholder="Ne aramıştınız?"
                      />
                    </div>
                    <div className="single_search_field search_category">
                      <select
                        className="search_fields"
                        id="at_biz_dir-category"
                      >
                        <option value>Kategori seç</option>
                        <option value="automobile">Automobile</option>
                        <option value="education">Education</option>
                        <option value="event">Event</option>
                      </select>
                    </div>
                    <div className="single_search_field search_location">
                      <select
                        className="search_fields"
                        id="at_biz_dir-location"
                      >
                        <option value>Şehir seç</option>
                        <option value="ab">AB Simple</option>
                        <option value="australia">Australia</option>
                        <option value="australia-australia">Australia</option>
                      </select>
                    </div>
                    <div className="atbd_submit_btn">
                      <button
                        type="submit"
                        onClick={noAction}
                        className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search"
                      >
                        Ara
                      </button>
                    </div>
                  </div>
                </form>
                {/* ends: .search_form */}
                <div className="directory_home_category_area">
                  <ul className="categories">
                    <li>
                      <NavLink onClick={noAction} to="/at_demo">
                        <span className="color-danger">
                          <i className="la la-building" />
                        </span>
                        Kurumlar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={noAction} to="/at_demo">
                        <span className="color-danger">
                          <i className="la la-user" />
                        </span>
                        Eğitmenler
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={noAction} to="/at_demo">
                        <span className="color-danger">
                          <i className="la la-book" />
                        </span>
                        Kurslar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={noAction} to="/at_demo">
                        <span className="color-danger">
                          <i className="la la-calendar" />
                        </span>
                        Etkinlikler
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* ends: .directory_home_category_area */}
              </div>
              {/* ends: .col-lg-10 */}
            </div>
          </div>
        </div>
        {/* ends: .directory_search_area */}
      </Fragment>
    );
  }
}
