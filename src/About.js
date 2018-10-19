import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <div className="about-page-wrapper">
            <div className="bg-block">
	            <h1 className="text-center">
	               ABOUT US...
	            </h1>
            </div>
            <div className="sub-page-container">
               <div className="section-container about-us-block">
                  <div className="heading">About us</div>
                  <div className="sub-heading">Thank you for your time</div>
                  <div className="row">
                     <div className="col-sm-4">
                        <img src="/image/portfolio2.jpeg" alt="about-us"/>
                     </div>
                     <div className="col-sm-8">
                        <div className="content-block">
                           <p className="title">
                              Lorem ipsum
                           </p>
                           <p className="content">
                              Lorem ipsum dolor sit amet, 
                              in porro albucius qui, in nec quod novum accumsan, mei ludus 
                              tamquam dolores id. No sit debitis meliore postulant, per 
                              ex prompta alterum sanctus, pro ne quod dicunt sensibus.
                           </p>
                        </div>
                        <div className="content-block">
                           <p className="title">
                              Lorem ipsum
                           </p>
                           <p className="content">
                              Lorem ipsum dolor sit amet, 
                              in porro albucius qui, in nec quod novum accumsan, mei ludus 
                              tamquam dolores id. No sit debitis meliore postulant, per 
                              ex prompta alterum sanctus, pro ne quod dicunt sensibus.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default About;