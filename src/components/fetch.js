import React, { Component } from 'react';

import Text from '../components/text';
class Fetch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fullname: [],
		};
	}

	componentDidMount() {
		const upper = (string) => {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		const url = 'https://randomuser.me/api/?results=10';
		fetch(url)
			.then((resp) => resp.json())
			.then(data => {
				const contacts = data.results;
				contacts.forEach(contact => {
					const fullname = upper(contact.name.first) + " " + upper(contact.name.last);
					this.setState(prevState => ({
						fullname: [...prevState.fullname, fullname]
					}));
				});
			});
	}

	outPutAllNames() {
		let output = [];
		for (let i = 0; i < this.state.fullname.length; i++) {
			output.push(<li key={i}>{this.state.fullname[i]}</li>);
		}
		return output;
	}

	removeOne() {
		this.setState(prevState => {
			fullname: [...this.state.fullname.splice(0, 1)]
		});
	}

	render() {
		return (
			<div>
				<Text onclick="removeOne()" msg='Lekker knikkeren' />
				<ul>
					{this.outPutAllNames()}
				</ul>
			</div>
		)
	}
}

export default Fetch;