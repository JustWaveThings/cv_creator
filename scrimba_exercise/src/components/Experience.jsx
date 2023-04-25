import React, { Component } from 'react';
import Input from './Input';
class Experience extends Component {
	render() {
		return (
			<section className="experience">
				<h4>Experience</h4>
				<Input
					label="Company Name"
					name="companyName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.companyName}
				/>
				<Input
					label="Position Title"
					name="positionTitle"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.positionTitle}
				/>
				<Input
					label="Main Tasks"
					name="mainTasks"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.mainTasks}
				/>
				<Input
					label="Start Date"
					name="fromDate"
					placeholder=""
					type="date"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.fromDate}
				/>
				<Input
					label="End Date or Current"
					name="toDate"
					placeholder=""
					type="date"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.toDate}
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

export default Experience;
