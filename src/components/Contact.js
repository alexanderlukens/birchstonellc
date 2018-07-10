import React from 'react';
import { Button, Col, Input, Row } from 'react-materialize';


const ContactUs = () => {
  return (
    <section id="contact" className="grey lighten-2">
      <div className="container">
        <h1 className="center-align">Contact Us</h1>
        <form className="col s12" action="https://formspree.io/birchstonecapital@gmail.com" method="POST">
            <Row>
                <Input s={6} label="First Name" required name="First Name"/>
                <Input s={6} label="Last Name" required name="Last Name"/>
                <Input type="email" label="Email" required s={6} name="Email"/>
                <Col s={6}><label>Who Are You?</label></Col>
                <Input name='_subject' type='radio' checked value='investor_inquiry' label='An Investor' className='with-gap'/>
                <Input name='_subject' type='radio' value='seller_inquiry' label='A Home Owner (Looking to Sell)' className='with-gap' />
                <Input name='_subject' type='radio' value='other' label='Other' className='with-gap' />
                <Input type="textarea" required label="Message" s={12} name="Message"/>
            </Row>
            <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
