// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import CourseHeader from "./CourseHeader";
import CourseInformationCard from "./CourseInformationCard";
import WhatYouGet from "./WhatYouGet";
import Requirements from "./Requirements";
import { Helmet } from "react-helmet";
import QuestionModal from "../components/Shared/QuestionModal";
import ApplyModal from "../components/Shared/ApplyModal";

class PageJobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      applyVisible: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  questionShowModal = () => {
    this.setState({ visible: true });
  };

  questionHandleCancel = () => {
    this.setState({ visible: false });
  };

  applyShowModal = () => {
    this.setState({ applyVisible: true });
  };

  applyHandleCancel = () => {
    this.setState({ applyVisible: false });
  };

  render() {
    return (
      <React.Fragment>
        <Helmet title="Üniversite Onaylı NLP Eğitimi" />
        <CourseHeader title="NLP Eğitimi" />
        <section className="section">
          <div className="container">
            <Row>
              <CourseInformationCard />
              <Col lg={8} md={7} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4">
                  <h5>Neler Öğreneceksiniz: </h5>
                  <WhatYouGet />

                  <h5 className="mt-4">Gereksinimler: </h5>
                  <Requirements />

                  <h5 className="mt-4">
                    Açıklama:
                  </h5>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>

                  <div className="mt-4">
                    <Link onClick={this.applyShowModal} className="btn btn-outline-primary" to="#" >
                      Hemen Başvur <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link onClick={this.questionShowModal} className="btn btn-outline-primary" to="#" >
                      Soru Sor <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </div>
                <ApplyModal
                  show={this.state.applyVisible} onHide={this.applyHandleCancel} />
                <QuestionModal
                  show={this.state.visible} onHide={this.questionHandleCancel}
                />
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageJobDetail;
