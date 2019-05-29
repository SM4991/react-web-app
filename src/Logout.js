import React, { Component } from 'react';

class Logout extends Component {
   constructor() {
      super();
      if(localStorage.getItem('survey_user_id')){
         localStorage.setItem('survey_user_id', '');
      }
      window.location.href='/login';
   }
   render() {
      return (
         <div></div>
      )
   }
}

export default Logout;