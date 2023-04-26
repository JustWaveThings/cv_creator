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

	handleChange = (e, eduIndex) => {
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
				const updatedEducation = prevState.education.map((edu, index) => {
					if (index === eduIndex) {
						return {
							...edu,
							[e.target.name]: e.target.value,
						};
					}
					return edu;
				});
				return {
					...prevState,
					education: updatedEducation,
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
		console.log('addNew clicked');

		this.setState(prevState => {
			const newEdu = {
				id: nanoid(),
				institutionName: '',
				city: '',
				degree: '',
				gpa: '',
				graduatedYear: '',
			};

			return {
				...prevState,
				education: [...prevState.education, newEdu],
			};
		});
	};

	render() {
		console.log(this.state);
		return (
			<>
				<nav className="navbar">
					<h1>RESUME CREATOR</h1>
				</nav>
				<main>
					{this.state.editable && (
						<section className="input">
							<h4>Contact Information</h4>
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
							<h4>Education</h4>
							{this.state.education.map((edu, index) => {
								return (
									<div
										className="edu-cont"
										key={edu.id}
									>
										<Education
											handleChange={e => this.handleChange(e, index)}
											institutionName={edu.institutionName}
											city={edu.city}
											degree={edu.degree}
											gpa={edu.gpa}
											graduatedYear={edu.graduatedYear}
										/>
									</div>
								);
							})}

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
