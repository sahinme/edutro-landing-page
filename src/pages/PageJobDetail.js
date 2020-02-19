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

class PageJobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
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

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
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
                    <Link className="btn btn-outline-primary" to="/egitimler/basvuru-yap" >
                      Hemen Başvur <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link onClick={this.showModal} className="btn btn-outline-primary" to="#" >
                      Soru Sor <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </div>
                <QuestionModal
                  show={this.state.visible} onHide={this.handleCancel}
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
