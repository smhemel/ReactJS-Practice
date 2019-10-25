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
                <div classNam="container">
                    <div classNam="row">
                        <div classNam="col-lg-12 text-center">
                        <h2 classNam="section-heading text-uppercase">Services</h2>
                        <h3 classNam="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div classNam="row text-center">
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