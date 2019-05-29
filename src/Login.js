import React, { Component } from 'react';

class Login extends Component {
   constructor() {
      super();
      this.state = {
         formValues: {email: '', password: ''},
         formErrors: {email: '', password: ''}
      };
      this.handleSubmit = this.handleSubmit.bind(this);

      if(localStorage.getItem('survey_user_id')){
         window.location.href = '/';
      }
   }
   handleSubmit(event){
      const form = new FormData(event.target);
      //console.log(form);
      const login = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      form.set('login', login);
      form.set('password', password);
      form.set('email', '');
      if(login == 'admin@gmail.com' && password == '123456'){
         localStorage.setItem('survey_user_id', 1);
         localStorage.setItem('survey_user_token', 'ashdhasdgvgasvgdvagsvdg');
         window.location.href = '/';
      } else {
         this.setState(prevState => ({
            formErrors: {...prevState.formErrors, password:'Invalid login or password'} 
         }) );
      }
      // fetch("http://localhost/valency/api/security/login", {
      //   method: "POST",
      //   body: form,
      //   // mode: 'no-cors'
      // }).then(res => res.json())
      //   .then( 
      //    (result) => {
      //       if(result.status === 1){
      //          /* for session */
      //          localStorage.setItem('survey_user_id', result.data.id);
      //          localStorage.setItem('survey_user_token', result.data.token);
      //          this.setState(prevState => ({
      //             formErrors: {...prevState.formErrors, password:'Login Successful'} 
      //          }));
               
      //       } else {
      //          this.setState(prevState => ({
      //             formErrors: {...prevState.formErrors, password:result.message} 
      //          }));
      //       }
      //    },
      //    (error) => {
      //       console.log('Error occured');
      //    }
      // );
      // $.ajax({
      //    url: url,
      //    data: data,
      // }).done(function(response){
      //    console.log(response);
      // });

      /* for session */
      // localStorage.setItem('user', '1');
      // const y = localStorage.getItem('user');
      // console.log(y);

      event.preventDefault();
   }
   render() {
      return (
         <div className="login-page-wrapper">
            <div className="bg-block">
	            <h1 className="text-center">
                  LOGIN...
               </h1>
            </div>
            <div className="sub-page-container">
               <div className="section-container login-block">
                  <div className="heading">Login</div>
                  <div className="sub-heading">Interact with Us</div>
                  <div className="row">
                     <div className="col-sm-7">
                        <div className="form-container">
                           <div className="form-result">{this.state.formResult}</div>
                           <form onSubmit={this.handleSubmit} method="post" id="login-form">
                              <div className="form-group">
                                 <label htmlFor="email">Email</label>
                                 <input type="text" name="email" placeholder="eg. daniel@gmail.com" className="form-control" />
                                 <div className="error-block">{this.state.formErrors.email}</div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="password">Password</label>
                                 <input type="password" name="password" placeholder="******" className="form-control" />
                                 <div className="error-block">{this.state.formErrors.password}</div>
                              </div>
                              <div className="form-group">
                                 <button type="submit" className="submit-button btn btn-default" name="submit">Submit</button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-sm-5">
                        <img src="/image/employee.jpeg" alt="login"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Login;