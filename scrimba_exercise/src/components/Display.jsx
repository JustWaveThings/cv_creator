import React, { Component } from 'react';
import '../display.css';

class Display extends Component {
	render() {
		return (
			<>
				{this.props.editable && (
					<div className="include-button">
						<section className="display-main-cont">
							<header className="header">
								<h1 className="display-header"> FirstName lastName</h1>
								<span>Full Stack Web Developer</span>
							</header>
							<div className="main-cont">
								<section className="sidebar">
									<section className="contact">
										<h5>Contact</h5>
										<div className="display-info-cont">
											<div className="label">Address</div>
											<div className="value">Address value</div>
										</div>
										<div className="display-info-cont">
											<div className="label">Email</div>
											<div className="value email">Email value</div>
										</div>
										<div className="display-info-cont">
											<div className="label">Phone Number</div>
											<div className="value phone">Phone Number value</div>
										</div>
									</section>
								</section>
								<main className="main">
									<section className="display-description">
										<h5>Objective</h5>
										<div className="description-value">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed
											vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra
											erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum
											nec gravida. Integer quis porta turpis. Aenean et metus.
										</div>
									</section>
									<section className="display-education">
										<h5>Education</h5>
										<div className="display-edu-cont">
											<div className="display-info-cont">
												<div className="value">graduatedYear</div>
												<div className="edu-right">
													<div className="edu-name-city">
														<div className="value">Institution Name value,</div>
														<div className="value">City value</div>
													</div>
													<div className="display-info-cont">
														<div className="label">Degree or Certification:</div>
														<div className="value">Degree or Certification value</div>
													</div>
													<div className="display-info-cont">
														<div className="label">GPA:</div>
														<div className="value">GPA value</div>
													</div>
												</div>
											</div>
										</div>
									</section>
									<section className="display-education">
										<h5>Experience</h5>
										<div className="display-edu-cont">
											<div className="display-info-cont">
												<div className="value">Start - End </div>
												<div className="edu-right">
													<div className="edu-name-city">
														<div className="value">Job title,</div>
														<div className="value">Company</div>
													</div>
													<div className="display-info-cont">
														<div className="value">Location</div>
													</div>
													<div className="display-info-cont">
														<div className="label">Achievements</div>
														<div className="value">Achievements value</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								</main>
							</div>
						</section>
						{!this.props.hideButtonsState && (
							<nav className="nav-preview, buttonContainer">
								<button
									className="display"
									onClick={this.props.handleSubmit}
								>
									{this.props.editable ? 'Display Input Fields' : 'Display Resume'}
								</button>
								<button
									className="hide"
									onClick={this.props.handleHideButtons}
								>
									Hide these Buttons for Printing and Saving Resume - this is irreversable!!!
								</button>
							</nav>
						)}
					</div>
				)}
			</>
		);
	}
}

export default Display;
