// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import course1 from "../../images/course/1.jpg";
import course2 from "../../images/course/2.jpg";
import course3 from "../../images/course/3.jpg";
import course4 from "../../images/course/4.jpg";
import course5 from "../../images/course/5.jpg";
import course6 from "../../images/course/6.jpg";
import course7 from "../../images/course/7.jpg";
import course9 from "../../images/course/9.jpg";

import team01 from "../../images/team/1.jpg";
import team02 from "../../images/team/2.jpg";
import team03 from "../../images/team/3.jpg";
import team04 from "../../images/team/4.jpg";
import CourseCard from "./CourseCard";
import TeacherCard from "./TeacherCard";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <React.Fragment>
        <section className="section" id="courses">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Popüler Eğitimleri Keşfedin</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Anlayış{" "}
                    <span className="text-primary font-weight-bold">
                      Beceri
                    </span>{" "}
                    Algı, Yetenek Akademisi
                  </p>
                </div>
              </div>
            </div>

            <Row>
              {data.map(item => {
                return (
                  <CourseCard
                    title="Program for Missionaries"
                    price="899.99"
                    students="20"
                  />
                );
              })}

              <Col className="mt-4 pt-2 text-center">
                <Link to="#" className="btn btn-primary">
                  Daha Fazla Eğitim Görüntüle{" "}
                  <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>
            </Row>
          </div>

          <div className="container mt-100 mt-60" id="instructors">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Öne Çıkan Eğitmenler</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Sizin İçin{" "}
                    <span className="text-primary font-weight-bold">
                      Önerilen
                    </span>{" "}
                    Eğitmenler
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {data.map(teacher => {
                return (
                  <TeacherCard name="Seyit Ahmet Abay" alan="Kişisel Gelişim" />
                );
              })}
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
