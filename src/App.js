import React, { useEffect } from 'react';
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
import Home from "./Home.js";
import Services from "./Services.js";
import About from "./About.js";
import Contact from "./Contact.js";
import './App.css';
import './bootstrap.min.css';
import './fontawesome-all.min.css';
import './magnific-popup.css';
import './tooplate-style.css';
import "./slick/slick.css";
import "./slick/slick-theme.css";
import "./static/img/constructive_bg_01.jpg";
import useGaTracker from './useGaTracker.js'
import ReactGA from "react-ga";


export default function App() {
const location = useLocation();

const TRACKING_ID = "UA-207738261-2";
ReactGA.initialize(TRACKING_ID);
useGaTracker();

useEffect(()=>{
if (document.readyState === "interactive" || document.readyState === "complete") {
  return document.body.className = "loaded";
} 
},[])
useEffect(()=>{
if (location.pathname === "/") {
  document.body.id = "bg-home";
} else if (location.pathname === "/Services") {
  document.body.id = "bg-services"
} else if (location.pathname === "/About") {
  document.body.id = "bg-about"
} else if (location.pathname === "/Contact") {
  document.body.id = "bg-contact"
} 
},[location])

function handleNavButtonClick() {
  const navButton = document.querySelector("#tmSideBar");
 return navButton.classList.toggle("show")
}
function handleNavItemClick() {
  const navButton = document.querySelector("#tmSideBar");
  return navButton.classList.remove("show")
}
  return (<>
    <div className="App">

      {/*} Loader */}
	<div id="loader-wrapper">
		<div id="loader"></div>
		<div className="loader-section section-left"></div>
		<div className="loader-section section-right"></div>
	</div>
	
	{/* Page Content */}
	<div className="container-fluid tm-main">
		<div className="row tm-main-row">

			{/* Sidebar */}
			<div id="tmSideBar" className="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">

				<button id="tmMainNavToggle" className="menu-icon" onClick={handleNavButtonClick}>&#9776;</button>

				<div id="tmMainNavContainer" className="inner">
					<nav id="tmMainNav" className="tm-main-nav">
						<ul>
							<li>
								<NavLink to="/" id="tmNavLink1" onClick={handleNavItemClick} activeClassName="newNavActiveClass" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
									<i className="fas fa-home tm-nav-fa-icon"></i>
									<span>Home</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Services" id="tmNavLink2" onClick={handleNavItemClick} className="scrolly" exact activeClassName="newNavActiveClass" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
									<i className="fas fa-map tm-nav-fa-icon"></i>
									<span>Services</span>
								</NavLink>
							</li>							
							<li>
								<NavLink to="/About" className="scrolly" onClick={handleNavItemClick} exact activeClassName="newNavActiveClass" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
									<i className="fas fa-users tm-nav-fa-icon"></i>
									<span>About</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Contact" className="" onClick={handleNavItemClick} exact activeClassName="newNavActiveClass" data-bg-img="constructive_bg_04.jpg">
									<i className="fas fa-comments tm-nav-fa-icon"></i>
									<span>Contact</span>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>

      <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content">
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route exact path="/services">
<Services />
</Route>
<Route exact path="/about">
<About />
</Route>
<Route exact path="/contact">
<Contact />
</Route>
</Switch>
</div>	{/* .tm-content */}						
			</div>	{/* row */}			
		</div>
    </div>
    		<div id="preload-01"></div>
        <div id="preload-02"></div>
        <div id="preload-03"></div>
        <div id="preload-04"></div>
        </>)
}