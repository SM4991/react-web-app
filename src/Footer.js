import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Footer extends Component {
   render() {
      return (
        <div className="footer-wrapper">
            <div className="row">
	            <div className="col-sm-4 single-block">
	            	<div className="heading">
		            	Solutions
                  	</div>
                  	<div className="content-block">
	                  	<p>
		                  	Lorem ipsum dolor sit amet, in porro albucius qui, in 
		                  	nec quod novum accumsan, mei ludus tamquam dolores id. 
		                  	No sit debitis meliore postulant, per ex prompta alterum 
		                  	sanctus, pro ne quod dicunt sensibus.
	                  	</p>
	                  	<div className="read-more-block">
		                  	<Link className="read-more" to="/">Read More</Link>
                    	</div>
                    </div>
	            </div>
	            <div className="col-sm-4 single-block">
	            	<div className="heading">
	                  	About Us
                    </div>
	            	<div className="content-block">
	                  	<p>
		                  	Lorem ipsum dolor sit amet, in porro albucius qui, in 
		                  	nec quod novum accumsan, mei ludus tamquam dolores id. 
		                  	No sit debitis meliore postulant, per ex prompta alterum 
		                  	sanctus, pro ne quod dicunt sensibus.
	                  	</p>
	                  	<div className="read-more-block">
		                  	<Link className="read-more" to="/about">Read More</Link>
                    	</div>
                    </div>
	            </div>
	            <div className="col-sm-4 single-block">
		            <div className="heading">
	                  	Contact Us
                    </div>
	            	<div className="content-block">
	                  	<p>
		                  	Lorem ipsum dolor sit amet, in porro albucius qui, in 
		                  	nec quod novum accumsan, mei ludus tamquam dolores id. 
		                  	No sit debitis meliore postulant, per ex prompta alterum 
		                  	sanctus, pro ne quod dicunt sensibus.
	                  	</p>
	                  	<p><b>Contact:</b> +91-9999999999</p>
	                  	<p><b>Email:</b> dummy@gmail.com</p>
	                  	<p><b>Address:</b> Dummy, dummy, dummy, Jaipur</p>
                    </div>
	            </div>
            </div>
        </div>
      )
   }
}

export default Footer;