import React, { Component } from 'react';
import Experience from './components/Experience';
import Education from './components/Education';
import { nanoid } from 'nanoid';
import Display from './components/Display';
import General from './components/General';
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: true,
			firstName: '',
			lastName: '',
			title: '',
			email: '',
			phoneNumber: '',
			address: '',
			description: '',
		};
		/* education: [
				{
					id: nanoid(),
					schoolName: '',
					titleOfStudy: '',
					graduatedYear: '',
				},
			],
			experience: [
				{
					id: nanoid(),
					companyName: '',
					positionTitle: '',
					mainTasks: '',
					fromDate: '',
					toDate: '',
				},
			], */
	}

	handleChange = e => {
		this.setState(prevState => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};

	handleSubmit = () => {
		this.setState(prevState => {
			return {
				...prevState,
				editable: !prevState.editable,
			};
		});
	};

	handleAddNew = () => {
		//
		console.log('addNew clicked');
	};

	render() {
		//console.log('App state: ', this.state);
		/* 	console.log(this.state.editable);
		console.log(this.state.education[0].editable);
		console.log(this.state.experience[0].editable); */

		return (
			<>
				<nav className="navbar">
					<h1>RESUME CREATOR</h1>
				</nav>
				<main>
					{this.state.editable && (
						<section className="input">
							<General
								handleChange={e => this.handleChange(e)}
								firstName={this.state.firstName}
								lastName={this.state.lastName}
								email={this.state.email}
								phoneNumber={this.state.phoneNumber}
								address={this.state.address}
								description={this.state.description}
								title={this.state.title}
							/>
							{/* <Education
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleAddNew={this.handleAddNew}

							schoolName={this.state.education[1].schoolName}
							titleOfStudy={this.state.education[1].titleOfStudy}
							graduatedYear={this.state.education[1].graduatedYear}
						/>
						<Experience
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleAddNew={this.handleAddNew}

							companyName={this.state.experience[1].companyName}
							positionTitle={this.state.experience[1].positionTitle}
							mainTasks={this.state.experience[1].mainTasks}
							fromDate={this.state.experience[1].fromDate}
							toDate={this.state.experience[1].toDate}
						/> */}
						</section>
					)}
					<nav className="nav-preview">
						<button
							className="
						display"
							onClick={this.handleSubmit}
						>
							{!this.state.editable ? 'Display Input Fields' : 'Display Resume'}
						</button>
					</nav>
					<section className="display">
						<Display />
					</section>
				</main>

				<footer>
					<p>© JustWaveThings</p>
				</footer>
			</>
		);
	}
}

export default App;
