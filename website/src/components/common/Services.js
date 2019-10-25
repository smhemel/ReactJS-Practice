import React, { Component } from 'react';
import SingleService from './SingleService';

const services = [
    {
        title: 'E-commerce',
        description: 'lorem ipsum dolor sit amret, consectetur adipisicing elit. Minima maxime quam asdlfhasldfjasdlkfd afsdhfalksdfjsalkdfj sdhflsdjf sdjflsew sdjflkj',
        icon: 'fa-shopping-cart'
    },
    {
        title: 'Responsive Design',
        description: 'lorem ipsum dolor sit amret, consectetur adipisicing elit. Minima maxime quam sdfhs l dsfhfdsjfl shsdfs flshfwf aslkdhfaeldhf',
        icon: 'fa-laptop'
    },
    {
        title: 'Web Security',
        description: 'lorem ipsum dolor sit amret, consectetur adipisicing elit. Minima maxime quama dfhasf fhsalfslfw  hfdsfleydsf shdfashl',
        icon: 'fa-lock'
    }
];

class Services extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {
                            services.map((service, index) => {
                                return <SingleService {...service} key={index} />
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;