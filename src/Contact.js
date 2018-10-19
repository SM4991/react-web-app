import React, { Component } from 'react';

class Contact extends Component {
   render() {
      return (
         <div className="contact-page-wrapper">
            <div className="bg-block">
	            <h1 className="text-center">
                  CONTACT US...
               </h1>
            </div>
            <div className="sub-page-container">
               <div className="section-container contact-us-block">
                  <div className="heading">Get in Touch</div>
                  <div className="sub-heading">Contact us</div>
                  <div className="row">
                     <div className="col-sm-7">
                        <div className="form-container">
                           <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" name="name" placeholder="eg. Daniel" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email" placeholder="eg. daniel@gmail.com" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="subject">Subject</label>
                              <input type="text" name="subject" placeholder="eg. Have a query" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="message">Message</label>
                              <textarea name="message" placeholder="eg. Hello.. I Want to...." className="form-control"></textarea>
                           </div>
                           <div className="form-group">
                              <button className="submit-button btn btn-default" name="submit">Submit</button>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-5">
                        <img src="/image/employee.jpeg" alt="contact-us"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Contact;