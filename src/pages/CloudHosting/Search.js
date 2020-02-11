// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const data = [{ name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }]
        const cities = [{ name: "Ankara" }, { name: "Istanbul" }, { name: "Izmir" }, { name: "Nevsehir" }];
        return (
            <React.Fragment>
                <section /* className="section-two bg-light" */>
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={10}>
                                <form className="p-4 shadow bg-white rounded">
                                    <h4 className="mb-3">Dilediğiniz eğitimi arayın</h4>
                                    <Row>
                                        <Col>
                                            <div className="input-group form-group mb-0">
                                                <input name="name" id="name" type="text" className="form-control rounded-left" placeholder="eğitim arayın :" />
                                                <div style={{ width: "500px" }} className="input-group-append" id="button-addon4">
                                                    <select className="form-control rounded-0" placeholder="lokasyon" id="domain_list">
                                                        {cities.map(item => <option key={item.name} >{item.name}</option>)}
                                                    </select>
                                                    <input type="button" id="search" name="search" className="searchbtn btn btn-primary btn-block" value="Ara" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        {data.map(item => {
                                            return (
                                                <Col lg={2} md={4} className="col-6 mt-4">
                                                    <Link to="#" className="text-dark">
                                                        <div className="rounded shadow bg-white p-1 text-center">
                                                            <h6 className="mb-0">{item.name} <br /><span className="text-primary">$4.99</span>/year</h6>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Search;