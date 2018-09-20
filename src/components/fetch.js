import React, { Component } from 'react';

class Fetch extends Component {
	constructor(props) {
		super(PushSubscriptionOptions);
		this.state = {
			fullname: [],
		}
	}
	
componentDidMount(){

const upper = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const url = 'https://randomuser.me/api/?results=10';
 fetch(url)
.then((resp) => resp.json())
.then(data => {
	const contacts = data.results;
	contacts.sort(function (a, b) {
		return a.name.first.charCodeAt(0) - b.name.first.charCodeAt(0);
	});	
	contacts.forEach( contact => {
	const fullname = upper(contact.name.first) + " " + upper(contact.name.last);
	  console.log(fullname);
	  return(
		  <div key={contact.results}>
			<p>{contact.name.first} + {contact.name.last}</p>
		  </div>
	  )
	})
})
.catch(function(error) {
	console.log(error);
});
	}
	render() {
		return(
			<ul>
				{fullname.map(names =>
					<li key={names.name}></li>
				)}
			</ul>
		)
	}

}

export default Fetch;