import React from "react";
import { Link } from "react-router-dom"
import useGoogleAnalytics from "./useGoogleAnalytics";

export default function Home() {
    useGoogleAnalytics();
    return (
        <>
        <div className="ml-auto">
            <header className="mb-4"><h1 className="tm-text-shadow">React.js Web Developer</h1></header>
            <p className="mb-5 tm-font-big">I specialize in building Responsive Web Applications, making your website more efficient, faster and vastly improving the User Experience. 
            Single Page Applications using React allow your website to load only one time.
            This means that when you navigate to a different page, the overall website will not load again, instead it will load only the content required for that page.
            Even if the device goes offline, you will still be able to navigate through the various pages of the application.
            There is much more to React that makes it such a great option. Click continue to learn more!</p>
            <Link to="/about" className="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Continue...</Link> 
            {/* data-nav-link holds the ID of nav item, which means this link should behave the same as that nav item  */}
        </div>
    </>        
    )
}