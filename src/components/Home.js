import React, { Component } from 'react';
import Header from './home/header';
import About from './home/about';
import Profilio from './home/profilio';
import Newsletter from './home/newsletter';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <About />

                <Profilio />

                <Newsletter />
            </div>
        );
    }
}

export default Home;