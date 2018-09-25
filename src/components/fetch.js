import React, { Component } from 'react';
import Text from '../components/text';
class Fetch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fullname: [],
		};
		this.removeOne = this.removeOne.bind(this);
	}

	componentDidMount() {
		const upper = (string) => {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		let url = 'https://randomuser.me/api/?results=11';
		fetch(url)
		.then((resp) => resp.json())
		.then(data => {
			const contacts = data.results;
			console.log(contacts);
			contacts.forEach(contact => {
				const fullname = upper(contact.name.first) + " " + upper(contact.name.last);
				this.setState(prevState => ({
					fullname: [...prevState.fullname, fullname]
				}));
			});
		});
	}

	removeOne(index) {
		this.setState(prevState => {
			fullname: [...this.state.fullname.splice(index, 1)]
			this.forceUpdate();
			console.log(this.state.fullname);
		});
	}	

	render() {
		return (
			<div>
				<Text onClick={this.removeOne} msg='Lekker knikkeren' />
				<button onClick={this.removeOne}>
					Delete
				</button>

				{
				this.state.fullname.map( (names,i) => {
					return(	
						<ul>
							<li key={i}>{names}</li>
						</ul>)
					})
			}
				
				
				
				{/* <ul>
					{this.outPutAllNames()}
				</ul> */}
			</div>
		)
	}
}

export default Fetch;