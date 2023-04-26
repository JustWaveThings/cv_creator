import React, { Component } from 'react';
import Input from './Input';
class Experience extends Component {
	render() {
		return (
			<section className="experience">
				<h4>Experience</h4>
				<Input
					placeholder="Company"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.companyName}
				/>
				<Input
					placeholder="Position Title"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.positionTitle}
				/>
				<Input
					placeholder="Location"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.positionTitle}
				/>
				<Input
					placeholder="Duties / Achievements"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.mainTasks}
				/>
				<Input
					placeholder="From"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.fromDate}
				/>
				<Input
					placeholder="To or Present"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.toDate}
				/>

				<div className="buttonContainer">
					{/* <button onClick={this.props.handleSubmit}>
						{this.props.editStatus ? 'Submit' : 'Edit'}
					</button> */}
					<button>Delete</button>
					<button onClick={this.props.handleAddNew}>Add New</button>
				</div>
			</section>
		);
	}
}

export default Experience;
