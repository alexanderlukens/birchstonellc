import React from 'react';

const ContactUs = () => {
  return (
      <div className="container">
        <h1 className="center-align">Contact Us</h1>
        <form className="col s12" action="https://formspree.io/alexander.lukens1@gmail.com" method="POST">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" name="First Name" className="validate"/>
                    <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <label for="last_name">Last Name</label>
                    <input id="last_name" type="text" name="Last Name" className="validate"/>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <label for="email_inline">Email</label>
                        <input id="email_inline" type="email" name="Email" className="validate"/>
                    </div>
                </div>
                <div className="col s12">
                    <input type="submit" value="Send"/>
                </div>
            </div>
        </form>
      </div>
  );
};

export default ContactUs;
