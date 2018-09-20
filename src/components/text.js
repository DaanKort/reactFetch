import React, { Component } from 'react';

class Text extends Component {
	render(){
		return(
			<div className='text'>
				<p> This is a component </p>
				<button>{this.props.msg}</button>
			</div>
		)
	}
}

export default Text;