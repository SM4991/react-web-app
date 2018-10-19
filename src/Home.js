import React, { Component } from 'react';

class Home extends Component {
   render() {
      return (
         <div className="home-page-wrapper">
            <div className="bg-block">
               <div className="row">
                  <div className="col-sm-4 image-block">
                     <div className="image-content"><img src="/image/cellphone.png" alt="Survey" /></div>
                     <div className="image-title">Take our survey and win awesome gifts!!</div>
                  </div>
               </div>
            </div>
            <div className="sub-page-container">
               <div className="section-container benefits-block">
                  <div className="heading">Benefits of using Survey</div>
                  <div className="sub-heading">Thank you for your time</div>
                  <div className="row">
                     <div className="col-sm-4 benefits-single-block">
                        <div className="image-block">
                           <img src="/image/survey.png" alt="survey-icon"/>
                        </div>
                        <div className="content-block">
                           We provide the best surveys. Lorem ipsum dolor sit amet, 
                           in porro albucius qui, in nec quod novum accumsan, mei ludus 
                           tamquam dolores id. No sit debitis meliore postulant, per 
                           ex prompta alterum sanctus, pro ne quod dicunt sensibus.
                        </div>
                     </div>
                     <div className="col-sm-4 benefits-single-block">
                        <div className="image-block">
                           <img src="/image/smile.png" alt="smile-icon"/>
                        </div>
                        <div className="content-block">
                           We provide user satisfaction. Lorem ipsum dolor sit amet, 
                           in porro albucius qui, in nec quod novum accumsan, mei ludus 
                           tamquam dolores id. No sit debitis meliore postulant, per 
                           ex prompta alterum sanctus, pro ne quod dicunt sensibus.
                        </div>
                     </div>
                     <div className="col-sm-4 benefits-single-block">
                        <div className="image-block">
                           <img src="/image/gift.png" alt="gift-icon"/>
                        </div>
                        <div className="content-block">
                           You can win gift and merchandise. Lorem ipsum dolor sit amet, 
                           in porro albucius qui, in nec quod novum accumsan, mei ludus 
                           tamquam dolores id. No sit debitis meliore postulant, per 
                           ex prompta alterum sanctus, pro ne quod dicunt sensibus.
                        </div>
                     </div>
                  </div>
                  <div className="bottom-border"></div>
               </div>
               <div className="section-container portfolio-block">
                  <div className="heading">Portfolio</div>
                  <div className="sub-heading">Thank you for your time</div>
                  <div className="row">
                     <div className="col-sm-3 portfolio-single-block">
                        <div className="img-portfolio img-portfolio1"></div>
                     </div>
                     <div className="col-sm-3 portfolio-single-block">
                        <div className="img-portfolio img-portfolio2"></div>
                     </div>
                     <div className="col-sm-3 portfolio-single-block">
                        <div className="img-portfolio img-portfolio3"></div>
                     </div>
                     <div className="col-sm-3 portfolio-single-block">
                        <div className="img-portfolio img-portfolio4"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Home;