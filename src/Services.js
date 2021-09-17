import React from "react";
import "./slick/slick.css";
import "./slick/slick-theme.css";
import ReactGA from 'react-ga';


export default function Services() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="tm-section" id="tmServicesContainer">
<header className="mb-4" id="services-header"><h2 className="tm-text-shadow">My Services</h2></header>
<div className="tm-services-container">
<div id="services-container">
    <h3>React.js Web Application</h3>
    <ul>
        <li>Refactor Existing Site into React App</li>
        <li>Efficient, Fast & Responsive</li>
        <li>Overall Better User Experience</li>
        <li>Single Page Web Application</li>
        <li>Optimized Routing for Site Navigation</li>
    </ul>
</div>
<div id="services-container">
    <h3>Node.js Software Development</h3>
    <ul>
        <li>Small-Medium Scale Node.js Software</li>
        <li>Customized Software for Business Needs</li>
        <li>Mongo Database Powered Back-End</li>
        <li>Compatible with Your Web Application</li>
    </ul>
</div>
                </div>		            		          
        </div>     		          	
    )
}