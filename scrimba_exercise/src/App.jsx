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
			education: [
				{
					id: nanoid(),
					institutionName: '',
					city: '',
					degree: '',
					gpa: '',
					graduatedYear: '',
				},
			],
		};

		/*	experience: [
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
		const inputSection = e.target.parentElement.parentElement.className;

		if (inputSection === 'general') {
			this.setState(prevState => {
				return {
					...prevState,
					[e.target.name]: e.target.value,
				};
			});
		}
		if (inputSection === 'education') {
			this.setState(prevState => {
				return {
					...prevState,
					education: [
						{
							...prevState.education[0],
							[e.target.name]: e.target.value,
						},
					],
				};
			});
		}
	};

	handleSubmit = () => {
		this.setState(prevState => {
			return {
				...prevState,
				editable: !prevState.editable,
			};
		});
	};


	handleAddNewEdu = () => {
		//
		console.log('addNew clicked');
		//
		this.setState

	/* handleAddNewEdu = () => {
		//
		console.log('addNew clicked');
		//
		let newEduList = [];

		const newEdu = [
			<Education
				key={nanoid()}
				handleChange={this.handleChange}
				institutionName={this.state.education[0].institutionName}
				city={this.state.education[0].city}
				degree={this.state.education[0].degree}
				gpa={this.state.education[0].gpa}
				graduatedYear={this.state.education[0].graduatedYear}
			/>,
		];
		newEduList.push(newEdu);
		return newEduList;
	}; */

	render() {
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

							{this.handleAddNewEdu()}

							<div className="buttonContainer">
								{/* <button>Delete</button> */}
								<button onClick={this.handleAddNewEdu}>Add Education</button>
							</div>
							{/*
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
