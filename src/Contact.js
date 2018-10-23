import React, { Component } from 'react';

class Contact extends Component {
   constructor() {
      super();
      this.state = {
         name_value: '', 
         email_value: '',
         name_error: '', 
         email_error: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.validateName = this.validateName.bind(this);
      this.validateEmail = this.validateEmail.bind(this);
   }
   validateName(name) {
      if(name !== undefined && name !== "" && name !== null){
         if(!name.match(/^[A-Za-z0-9 ]+$/i)){
            return 'Invalid Name';
         }
      }
      return true;
   }
   validateEmail(email) {
      if(email !== undefined && email !== "" && email !== null){
         if(!email.match(/^[A-Za-z0-9-_.]+@[A-Za-z0-9]+\.[A-Za-z]{2,6}$/i)){
            return 'Invalid Email';
         }
      }
      return true;
   }
   handleChange(event) {
      const target = event.target;
      const target_name = target.name;
      const target_value = target.value;
      if(target_name === "name"){
         this.setState({name_value: target_value});
         const result = this.validateName(target_value);
         if(result !== true){
            this.setState({name_error: result});
         } else {
            this.setState({name_error: ''});
         }
      }
      if(target_name === "email"){
         this.setState({email_value: target_value});
         const result = this.validateEmail(target_value);
         if(result !== true){
            this.setState({email_error: result});
         } else {
            this.setState({email_error: ''});
         }
      }
   }
   handleSubmit(event){
      const name = event.target.elements.name.value;
      const email = event.target.elements.email.value;
      const subject = event.target.elements.subject.value;
      const message = event.target.elements.message.value;
      console.log('Form submitted by '+name);
      event.preventDefault();
   }
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
                           <form onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                 <label htmlFor="name">Name</label>
                                 <input type="text" name="name" placeholder="eg. Daniel" className="form-control" value={this.state.name_value} onChange={this.handleChange}/>
                                 <div className="error-block">{this.state.name_error}</div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="email">Email</label>
                                 <input type="text" name="email" placeholder="eg. daniel@gmail.com" className="form-control" value={this.state.email_value} onChange={this.handleChange}/>
                                 <div className="error-block">{this.state.email_error}</div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="subject">Subject</label>
                                 <input type="text" name="subject" placeholder="eg. Have a query" className="form-control" />
                                 <div className="error-block"></div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="message">Message</label>
                                 <textarea name="message" placeholder="eg. Hello.. I Want to...." className="form-control"></textarea>
                              </div>
                              <div className="form-group">
                                 <button type="submit" className="submit-button btn btn-default" name="submit">Submit</button>
                              </div>
                           </form>
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