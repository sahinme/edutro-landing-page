import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class CourseHeader extends Component {
  render() {
    return (
      <section className="bg-half bg-light">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <Row className="justify-content-center">
                <Col lg={12} className="text-center">
                  <div className="page-next-level">
                    <h4 className="title mb-3"> Back-End Developer </h4>
                    <p className="para-desc mx-auto text-muted">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered bootstrap4 html
                      page.
                    </p>
                    <ul className="list-unstyled">
                      <li className="list-inline-item text-primary mr-3">
                        <i className="mdi mdi-map-marker text-warning mr-2"></i>
                        Beijing, China
                      </li>
                      <li className="list-inline-item text-primary">
                        <i className="mdi mdi-office-building text-warning mr-2"></i>
                        Vivo
                      </li>
                    </ul>
                    <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                      <li>
                        <span className="ml-1 text-uppercase text-primary font-weight-bold">
                          Eğitim Detayı
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseHeader;
