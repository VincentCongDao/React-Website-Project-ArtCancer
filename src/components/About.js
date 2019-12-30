// Home.js

import React, { Component } from 'react';
import Aboutheader from './about/aboutheader';
import Timeline from './about/timeline';
class About extends Component {
    render() {
        return (
            <div>
                <Aboutheader />
                <Timeline />
            </div>
        );
    }
}

export default About;
