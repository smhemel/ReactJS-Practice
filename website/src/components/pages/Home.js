import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';

class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Welcome To Our Website!"
                    subtitle = "It'S NICE TO MEET YOU"
                    buttonText = "Tell me more"
                    link = "/services"
                    showButton = {true}
                    image = {image}
                />

                <Services />
                <Portfolio />
            </div>
        );
    }
}

export default Home;