import React, { Component } from 'react';
import Input from './Input';
class Experience extends Component {
	render() {
		return (
			<>
				<section className="experience">
					<Input
						name="companyName"
						placeholder="Company"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.companyName}
					/>
					<Input
						name="positionTitle"
						placeholder="Position Title"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.positionTitle}
					/>
					<Input
						name="location"
						placeholder="Location"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.location}
					/>
					<Input
						placeholder="Duties / Achievements"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.mainTasks}
					/>
					<Input
						name="fromDate"
						placeholder="From"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.fromDate}
					/>
					<Input
						name="toDate"
						placeholder="To or Present"
						type="text"
						handleChange={this.props.handleChange}
						editStatus={this.props.editStatus}
						value={this.props.toDate}
					/>
				</section>
				<div className="buttonContainer">
					<button
						className="delete"
						onClick={this.props.handleDeleteExp}
						id={this.props.id}
					>
						Delete
					</button>
				</div>
			</>
		);
	}
}

export default Experience;
