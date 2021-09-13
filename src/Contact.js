import React, { useState, useEffect } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default function Contact() {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");
const [success, setSuccess] = useState(false);

useEffect(() => {
  if ( window.location.search.includes('success=true') ) {
    setSuccess(true);
  }
}, []);

function handleFormSubmit(event) {
    fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", "name": name, "email": email, "message": message })
          })
            .then(() => alert("Thank your for the message! I will get back to you soon."))
            .catch(error => alert(error));
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    }

if (success === true) {
    console.log("Message sent")
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
                        <form name="contact-form" method="post" onSubmit={handleFormSubmit} data-netlify="true">
                        <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-group">
                            <input value={name} onChange={e => setName(e.target.value)} label="name" type="text" id="contact_name" name="contact-name" className="form-control" placeholder="Name" required="" />
                            </div>
                            <div className="form-group">
                            <input value={email} onChange={e => setEmail(e.target.value)} label="email" type="email" id="contact_email" name="contact-email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div className="form-group">
                            <textarea value={message} onChange={e => setMessage(e.target.value)} label="message" id="contact_message" name="contact-message" className="form-control" rows="9" placeholder="Message" required=""></textarea>
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