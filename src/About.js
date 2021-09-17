import React from "react";
import useGoogleAnalytics from "./useGoogleAnalytics";


export default function About() {
    useGoogleAnalytics();
    return (
        <section id="tm-section-3" className="tm-section">						
        <div className="row mb-4">
            <header className="col-xl-12"><h2 className="tm-text-shadow">Website & Software Development</h2></header>		
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                <div className="media tm-bg-transparent-black tm-border-white">
                    <i className="fab fa-apple tm-icon-circled tm-icon-media"></i>
                    <div className="media-body">
                        <h3>React.js</h3>
                        <p> 
                            React is so powerful that you can turn off your internet and continue to navigate the pages of this website. 
                            Because this in a Single Page Application, you only have to load the website one time and that is just the beginning of what React can do!
                            Contact me to inquire about a React Application for your website!
                            </p>	
                    </div>
                </div>
            </div>	
            <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                <div className="media tm-bg-transparent-black tm-border-white">
                    <i className="fas fa-map-pin mr-4 tm-icon-circled tm-icon-media"></i>	
                    <div className="media-body">
                        <h3>Node.js</h3>
                        <p>Node.js has revolutionized how JavaScript has been used in Web Development and has also allowed for JavaScript to be used outside of the Web!
                            Using Node, I can build Software for almost any of your business or personal needs.
                            Mongo Database also provides a powerful and efficient backend for Node users.</p>	
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                <div className="media tm-bg-transparent-black tm-border-white">
                    <i className="fab fa-fly mr-4 tm-icon-circled tm-icon-media"></i>
                    <div className="media-body">
                        <h3>HTML & CSS</h3>
                        <p>HTML and CSS have become very advanced over the last decade.
                            Simple things like Flexbox, Grid, Transform and Animation make it possible to build a powerful interface without any scripting!
                            We also have the Web History API with HTML that makes things like React Router possible.</p>		
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                <div className="media tm-bg-transparent-black tm-border-white">
                    <i className="fab fa-linode mr-4 tm-icon-circled tm-icon-media"></i>
                    <div className="media-body">
                        <h3>Virtual DOM</h3>
                        <p>HTML uses the Document Object Model, which is what JavaScript uses to update the interface. While older frameworks like jQuery directly update the DOM, React uses the Vitual DOM which allows it to update the interface in a much more efficient and responsive way!</p>	
                    </div>
                </div>
            </div>			          		
        </div>						               
    </section>
    )
}