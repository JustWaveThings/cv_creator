import React, { Component } from 'react';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
class App extends Component {
	state = {
		general: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
		},
	};

	handleChange = e => {
		this.setState(() => {
			return { [e.target.name]: e.target.value };
		});
	};

	render() {
		console.log(this.state);
		return (
			<main>
				<h1>CV App</h1>
				<General handleChange={this.handleChange} />
				<Education />
				<Experience />
			</main>
		);
	}
}

export default App;
