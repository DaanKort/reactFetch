import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Text from '../components/text';
import Fetch from '../components/fetch';


class Homepage extends Component {
	render(){
		return(
			<div>
				<p> This is the Homepage. </p>
				<p> <Link to='/contact'>Contact us!</Link></p>
				<Fetch />
			</div>
		)
	}
}

export default Homepage;