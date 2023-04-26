import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
	render() {
		return (
			<section className="education">
				<h4>Education</h4>
				<Input
					placeholder="Institution Name"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.schoolName}
				/>
				<Input
					placeholder="City"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.schoolName}
				/>
				<Input
					placeholder="Degree or Certification"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.titleOfStudy}
				/>
				<Input
					placeholder="GPA"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.titleOfStudy}
				/>
				<Input
					placeholder="Year Completed"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.dateOfStudy}
				/>
				<div className="buttonContainer">
					<button>Delete</button>
					<button onClick={this.props.handleAddNew}>Add New</button>
				</div>
			</section>
		);
	}
}

export default Education;
