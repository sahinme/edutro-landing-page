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
                <h4 className="widget-title mb-0">Kontenjan</h4>
                <p className="text-success">13 kişi</p>
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
              <i className="mdi mdi-file-document-box mdi-24px float-left mr-3"></i>
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
              <i className="mdi mdi-currency-try mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Ücret:</h4>
                <p className="text-success">1500 ₺</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-calendar-text mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Başlangıç Tarihi:</h4>
                <p className="text-success mb-0">5 Mart, 2020</p>
              </div>
            </div>
            <div style={{ marginTop: "15px" }} className="widget">
              <i className="mdi mdi-calendar-remove mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Bitiş Tarihi:</h4>
                <p className="text-success mb-0">5 Mart, 2020</p>
              </div>
            </div>
            <div style={{ marginTop: "15px" }} className="widget">
              <i className="mdi mdi-clock-outline mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Eğitim Süresi:</h4>
                <p className="text-success mb-0">3 gün</p>
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
