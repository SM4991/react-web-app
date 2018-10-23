import React, { Component } from 'react';

class Contact extends Component {
   constructor() {
      super();
      this.state = {
         formValues: {name: '', email: '', subject: '', message: ''},
         formErrors: {name: '', email: '', subject: '', message: ''}
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
      } else {
         return 'This field cannot be blank.';
      }
      return '';
   }
   validateEmail(email) {
      if(email !== undefined && email !== "" && email !== null){
         if(!email.match(/^[A-Za-z0-9-_.]+@[A-Za-z0-9]+\.[A-Za-z]{2,6}$/i)){
            return 'Invalid Email';
         }
      } else {
         return 'This field cannot be blank.';
      }
      return '';
   }
   handleChange(event) {
      const target = event.target;
      const target_name = target.name;
      const target_value = target.value;
      this.setState(prevState => ({
         formValues: {...prevState.formValues, [target_name]:target_value} 
      }));
      if(target_name === "name"){
         const result = this.validateName(target_value);
         this.setState(prevState => ({
            formErrors: {...prevState.formErrors, [target_name]:result} 
         }));
      }
      if(target_name === "email"){
         const result = this.validateEmail(target_value);
         this.setState(prevState => ({
            formErrors: {...prevState.formErrors, [target_name]:result} 
         }));
      }
   }
   handleSubmit(event){
      if((this.state.formErrors.name === '' || this.state.formErrors.name === null || this.state.formErrors.name === undefined) && 
         (this.state.formErrors.email === '' || this.state.formErrors.email === null || this.state.formErrors.email === undefined)){
         this.setState({formResult: 'Form submitted'});
         this.setState(prevState => ({
            formValues: {...prevState.formValues, name:'', email: '', subject: '', message: ''} 
         })); 
         this.setState(prevState => ({
            formErrors: {...prevState.formErrors, name:'', email: '', subject: '', message: ''} 
         })); 
      } else {
         this.setState({formResult: 'First Correct the errors'});
      }
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
                           <div className="form-result">{this.state.formResult}</div>
                           <form onSubmit={this.handleSubmit} method="post">
                              <div className="form-group">
                                 <label htmlFor="name">Name</label>
                                 <input type="text" name="name" placeholder="eg. Daniel" className="form-control" value={this.state.formValues.name} onChange={this.handleChange}/>
                                 <div className="error-block">{this.state.formErrors.name}</div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="email">Email</label>
                                 <input type="text" name="email" placeholder="eg. daniel@gmail.com" className="form-control" value={this.state.formValues.email} onChange={this.handleChange}/>
                                 <div className="error-block">{this.state.formErrors.email}</div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="subject">Subject</label>
                                 <input type="text" name="subject" placeholder="eg. Have a query" className="form-control" value={this.state.formValues.subject} onChange={this.handleChange}/>
                                 <div className="error-block"></div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="message">Message</label>
                                 <textarea name="message" placeholder="eg. Hello.. I Want to...." className="form-control" value={this.state.formValues.message} onChange={this.handleChange}></textarea>
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