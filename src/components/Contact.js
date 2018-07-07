import React from 'react';
import { Input, Row } from 'react-materialize';


const ContactUs = () => {
  return (
      <div className="container">
        <h1 className="center-align">Contact Us</h1>
        <form className="col s12" action="https://formspree.io/alexander.lukens1@gmail.com" method="POST">
            <Row>
                <Input s={6} label="First Name" name="First Name"/>
                <Input s={6} label="Last Name" name="Last Name"/>
                <Input type="email" label="Email" s={6} name="Email"/>
                <Input s={6} type='select' label="Materialize Select" defaultValue='2'>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </Input>
                <Input type="textarea" label="Message" s={12} name="Message"/>
            </Row>
            <div className="row">
                <div className="col s12">
                    <input type="submit" value="Send"/>
                </div>
            </div>
        </form>
      </div>
  );
};

export default ContactUs;
