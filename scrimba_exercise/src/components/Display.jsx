import React, { Component } from 'react';
import '../display.css';

class Display extends Component {
	render() {
		return (
			<>
				{this.props.editable && (
					<section className="display-main-cont">
						<header className="header">
							<h1 className="display-header"> FirstName lastName</h1>
							<span>{`Title ${this.props.editable}`}</span>
						</header>
						<div className="main-cont">
							<section className="sidebar">
								<section className="contact">
									<h5> Contact Details</h5>
									<div className="display-cont">
										<div className="label">Address</div>
										<div className="value">Address value</div>
									</div>
									<div className="display-cont">
										<div className="label">Email</div>
										<div className="value email">Email value</div>
									</div>
									<div className="display-cont">
										<div className="label">Phone Number</div>
										<div className="value phone">Phone Number value</div>
									</div>
								</section>
							</section>
							<main className="main">
								<section className="display-description">
									<h5> Description</h5>
									<div className="description-value">Description value</div>
								</section>
								<section className="display-education">
									<h5> Education</h5>
									<div className="display-edu-cont">
										<div className="display-cont">
											<div className="label">Institution Name</div>
											<div className="value">Institution Name value</div>
										</div>
										<div className="display-cont">
											<div className="label">City</div>
											<div className="value">City value</div>
										</div>
										<div className="display-cont">
											<div className="label">Degree or Certification</div>
											<div className="value">Degree or Certification value</div>
										</div>
										<div className="display-cont">
											<div className="label">GPA</div>
											<div className="value">GPA value</div>
										</div>
										<div className="display-cont">
											<div className="label">Year of Completion</div>
											<div className="value">graduatedYear</div>
										</div>
									</div>
								</section>
								<section className="display-experience">
									<h5> Experience</h5>
									<div className="display-exp-cont">
										<div className="display-cont">
											<div className="label">Company Name</div>
											<div className="value">Company Name value</div>
										</div>
										<div className="display-cont">
											<div className="label">City</div>
											<div className="value">City value</div>
										</div>
										<div className="display-cont">
											<div className="label">Position Title</div>
											<div className="value">Position Title value</div>
										</div>
										<div className="display-cont">
											<div className="label">Main Tasks</div>
											<div className="value">Main Tasks value</div>
										</div>
										<div className="display-cont">
											<div className="label">Year Started</div>
											<div className="value">Year Started value</div>
										</div>
										<div className="display-cont">
											<div className="label">Year Ended</div>
											<div className="value">Year Ended value</div>
										</div>
									</div>
								</section>
							</main>
						</div>
					</section>
				)}
			</>
		);
	}
}

export default Display;
