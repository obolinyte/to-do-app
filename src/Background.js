import React, { Component } from 'react';
import './App.css';

class Background extends Component {
  render() {
    return (
        <div className="background-wrapper">
        <div className="skewed-background-top-left"></div>
        <div className="skewed-background-top-right"></div>
        <div className="rectangle"></div>
        <div className="oval"></div>
        <div className="rotated-rectangle"></div>
        <div className="oval-2"></div>
        </div>

    );
  }
}

export default Background;
