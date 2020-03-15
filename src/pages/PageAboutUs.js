// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";

// import images
import about from '../images/about.jpg';
import team1 from '../images/team/1.jpg';
import team2 from '../images/team/2.jpg';
import team3 from '../images/team/3.jpg';
import team4 from '../images/team/4.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import { inject, observer } from 'mobx-react';
import Stores from '../stores/storeIdentifier';


@inject(Stores.TenantStore)
@observer
class PageAboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        const educatorId = this.props.location.state.educatorId;
        this.props.tenantStore.getTenantById(educatorId);
        document.body.classList = "";
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
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {
        const { tenant } = this.props.tenantStore;
        return (
            <React.Fragment>
                <Helmet title={tenant.tenantName} />
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> {tenant.tenantName} </h4>
                                            <p> {tenant.title} </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />

                <section className="section">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link onClick={this.openModal} to="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Hikayemiz</h4>
                                    <p className="text-muted">{tenant.aboutUs}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Hizmetlerimiz</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {[1, 1, 1, 1, 1, 1, 1].map(x => {
                                return (
                                    <Col lg={4} md={6} className="mt-4 pt-2">
                                        <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                            <div className="icon text-center rounded-pill mr-3">
                                                <i className="mdi mdi-responsive text-primary"></i>
                                            </div>
                                            <div className="content mt-2">
                                                <h4 className="title mb-0">Aile Danismanligi</h4>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Eğitmene Soru Sor <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="section bg-light">
                    <div className="container">
                        <Row>
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Eğitmen Ekibimiz</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {tenant && tenant.tenantEducators && tenant.tenantEducators.map(item => {
                                return (
                                    <Col lg={3} md={6} className="mt-4 pt-2">
                                        <div className="team text-center">
                                            <div className="position-relative">
                                                <img src={team1} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                            </div>
                                            <div className="content pt-3 pb-3">
                                                <h5 className="mb-0"><Link to="#" className="name text-dark">{item.educatorName}</Link></h5>
                                                <small className="designation text-muted">{item.profession}</small>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                    {/* <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started Now</Link>&nbsp;
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div> */}
                </section>

            </React.Fragment>
        );
    }
}
export default withRouter(PageAboutUs);
