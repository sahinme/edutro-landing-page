// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import work1 from '../images/work/1.jpg';
import work2 from '../images/work/2.jpg';
import work3 from '../images/work/3.jpg';
import work4 from '../images/work/4.jpg';
import work5 from '../images/work/5.jpg';
import work6 from '../images/work/6.jpg';
import work7 from '../images/work/7.jpg';
import work8 from '../images/work/8.jpg';
import work9 from '../images/work/9.jpg';
import work10 from '../images/work/10.jpg';
import work11 from '../images/work/11.jpg';
import work12 from '../images/work/12.jpg';
import Search from './CloudHosting/Search';
import CourseCard from './Course/CourseCard';

class PageWork extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
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
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if (topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }

    render() {
        const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        return (
            <React.Fragment>
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> Eğitimleri Keşfet </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Eğitimler</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                <Search />

                <section className="section">
                    <div className="container">

                        <Row className="border-bottom">
                            <Col lg={9} md={8}>
                                <div className="section-title">
                                    <h4 className="title mb-2">Tüm Eğitimler</h4>
                                    <p className="text-muted mb-0">En popüler eğitimler</p>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="form custom-form">
                                    <div className="form-group">
                                        <label>Eğitimleri filtrele :</label>
                                        <select className="form-control" id="Sortbylist-Shop">
                                            <option>Yeni</option>
                                            <option>En ucuz</option>
                                            <option>En pahalı</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {data.map(item => {
                                return (
                                    <CourseCard
                                        title="Program for Missionaries"
                                        price="899.99"
                                        students="20"
                                    />
                                )
                            })}

                            <div className="col-12">
                                <ul style={{ marginTop: "30px" }} className="pagination justify-content-center mb-0 list-unstyled">
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Prev</Link></li>
                                    <li className="active"><Link to="#" className="pr-3 pl-3 pt-2 pb-2">1</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">2</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">3</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Next</Link></li>
                                </ul>
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageWork;
