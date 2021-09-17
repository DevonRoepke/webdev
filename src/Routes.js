import React from "react";
import { Switch, Route } from "react-router-dom"
import useGoogleAnalytics from "./useGoogleAnalytics";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";


export default function Routes() {
    useGoogleAnalytics()
   
    return (
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
    )
  }