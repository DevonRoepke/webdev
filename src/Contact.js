import React, { useState } from "react";

export default function Contact() {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ comment, setComment ] = useState("");


    function handleFormSubmit(event) {
event.preventDefault();
setName("");
setEmail("");
setComment("");
    }

    return (
        <section id="tm-section-4" className="tm-section">
        <div className="tm-bg-transparent-black tm-contact-box-pad">
            <div className="row mb-4">
                <div className="col-sm-12">
                    <header><h2 className="tm-text-shadow">Contact Me</h2></header>
                </div>
            </div>
            <div className="row tm-page-4-content">
                <div className="col-md-6 col-sm-12 tm-contact-col">
                    <div className="contact_message">
                        <form name="contact-form" method="POST" data-netlify={true} className="contact-form" onSubmit={handleFormSubmit}>
                        <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-group">
                                <input value={name} onChange={e => setName(e.target.value)} type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required="" />
                            </div>
                            <div className="form-group">
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div className="form-group">
                                <textarea value={comment} onChange={e => setComment(e.target.value)} id="contact_message" name="contact_comment" className="form-control" rows="9" placeholder="Message" required=""></textarea>
                            </div>
                            <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 tm-contact-col">
                    <div className="tm-address-box">
                        <p>I am occasionally unable to answer the phone, but if I do not pick up I will get back to you.
                            Please leave a message, send me a text or an email and I will get back to you as soon as I am able.</p>
                        <p id="email-contact">DevonRoepke1@Gmail.com</p>
                        <p id="phone-number">763-412-8918</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}