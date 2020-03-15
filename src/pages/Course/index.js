// React Basic and Bootstrap
import React, { Component } from 'react';

import Cta from './Cta';
import Cta1 from './Cta1';
import Services from './Services';
import Testi from './Testi';
import Home from './Home';
import Search from '../CloudHosting/Search';



class Index extends Component {
    componentDidMount() {
        console.log(this.props);
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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

        return (
            <React.Fragment>

                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

                <Home />

                <Search />

                <Services />

                <Cta />

                <Testi />

                <Cta1 />


                {/* <section className="bg-light section-two">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Partner />
                        </Row>
                    </div>
                </section> */}

            </React.Fragment>
        );
    }
}

export default Index;
