import React, { Component } from "react";
import client1 from "../images/client/01.jpg";
import { Row, Col } from "reactstrap";

class CourseInformationCard extends Component {
  render() {
    return (
      <Col lg={4} md={5} className="col-12">
        <div className="sidebar rounded shadow">
          <div className="widget border-bottom p-4">
            <h5 className="mb-0">Özellikler</h5>
          </div>

          <div className="p-4">
            <div className="widget">
              <i className="mdi mdi-account-check mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Eğitim Adı</h4>
                <p className="text-success">NLP Eğitimi</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-map-marker mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Lokasyon:</h4>
                <p className="text-success">Ankara</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-monitor mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Online Video:</h4>
                <p className="text-success">Başlangıç</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-briefcase-outline mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Sertifika:</h4>
                <p className="text-success">Var</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-school mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Katılım Belgesi:</h4>
                <p className="text-success">Var</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-currency-usd mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Ücret:</h4>
                <p className="text-success">1500 ₺</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-clock-outline mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Eğitim Tarihi:</h4>
                <p className="text-success mb-0">5th Mart, 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }} className="sidebar rounded shadow">
          <div className="widget border-bottom p-4">
            <h5 className="mb-0">Eğitmen</h5>
          </div>

          <div className="p-4">
            <div className="widget">
              <span className="mdi-24px float-left mr-3">
                <img
                  style={{ width: "55px" }}
                  src="https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png"
                />
              </span>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Abay Akademi</h4>
                <p className="text-success">Eğitim ve Danışmanlık Merkezi</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default CourseInformationCard;
