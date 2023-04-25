import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
	render() {
		return (
			<section className="education">
				<h4>Education</h4>
				<Input
					label="School Name"
					name="schoolName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.schoolName}
				/>
				<Input
					label="Title of Study"
					name="titleOfStudy"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.titleOfStudy}
				/>
				<Input
					label="Date of Study"
					name="dateOfStudy"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.dateOfStudy}
				/>
				<div>
					<button onClick={this.props.handleSubmit}>
						{this.props.editStatus ? 'Submit' : 'Edit'}
					</button>
					<button onClick={this.props.handleAddNew}>Add New</button>
				</div>
			</section>
		);
	}
}

export default Education;
