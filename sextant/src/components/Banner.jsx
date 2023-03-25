import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <p>{this.props.bannerText}</p>
            </div>
        );
    }
}

export default Banner;