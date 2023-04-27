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
			experience: [
				{
					id: nanoid(),
					companyName: '',
					positionTitle: '',
					location: '',
					mainTasks: '',
					fromDate: '',
					toDate: '',
				},
			],
		};
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
		if (inputSection === 'experience') {
			this.setState(prevState => {
				const updatedExperience = prevState.experience.map((exp, index) => {
					if (index === eduIndex) {
						return {
							...exp,
							[e.target.name]: e.target.value,
						};
					}
					return exp;
				});
				return {
					...prevState,
					experience: updatedExperience,
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
	handleDeleteEdu = (e, eduIndex) => {
		this.setState(prevState => {
			const updatedEducation = prevState.education.filter((edu, index) => {
				return index !== eduIndex;
			});
			return {
				...prevState,
				education: updatedEducation,
			};
		});
	};

	handleAddNewExp = () => {
		this.setState(prevState => {
			const newExp = {
				id: nanoid(),
				companyName: '',
				positionTitle: '',
				mainTasks: '',
				fromDate: '',
				toDate: '',
			};

			return {
				...prevState,
				experience: [...prevState.experience, newExp],
			};
		});
	};

	handleDeleteExp = (e, expIndex) => {
		this.setState(prevState => {
			const updatedExperience = prevState.experience.filter((exp, index) => {
				return index !== expIndex;
			});
			return {
				...prevState,
				experience: updatedExperience,
			};
		});
	};

	render() {
		console.log(this.state);
		return (
			<>
				{this.state.editable && (
					<div className="input-cont">
						<nav className="navbar">
							<h1>RESUME CREATOR</h1>
						</nav>
						<main>
							(
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
												handleDeleteEdu={e => this.handleDeleteEdu(e, index)}
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
									<button
										className="add"
										onClick={this.handleAddNewEdu}
									>
										Add Education
									</button>
								</div>
								<h4>Experience</h4>
								{this.state.experience.map((exp, index) => {
									return (
										<div
											className="exp-cont"
											key={exp.id}
										>
											<Experience
												handleDeleteExp={e => this.handleDeleteExp(e, index)}
												handleChange={e => this.handleChange(e, index)}
												companyName={exp.companyName}
												positionTitle={exp.positionTitle}
												mainTasks={exp.mainTasks}
												fromDate={exp.fromDate}
												toDate={exp.toDate}
											/>
										</div>
									);
								})}
								<div className="buttonContainer">
									<button
										className="add"
										onClick={this.handleAddNewExp}
									>
										Add Experience
									</button>
								</div>
							</section>
							<nav className="nav-preview, buttonContainer">
								<button
									className="
							display"
									onClick={this.handleSubmit}
								>
									{!this.state.editable ? 'Display Input Fields' : 'Display Resume'}
								</button>
							</nav>
						</main>
					</div>
				)}
				<section className="display">
					<Display editable={!this.state.editable} />
				</section>
				{this.state.editable && (
					<footer>
						<p>© JustWaveThings</p>
					</footer>
				)}
			</>
		);
	}
}

export default App;
