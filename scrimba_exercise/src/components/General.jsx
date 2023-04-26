import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className=" general ">
				<h4>Contact Information</h4>
				<Input
					placeholder="First Name"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.firstName}
				/>
				<Input
					placeholder="Last Name"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.lastName}
				/>
				<Input
					placeholder="Title"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.lastName}
				/>
				<Input
					placeholder="Address"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.lastName}
				/>

				<Input
					placeholder="Email"
					type="email"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.email}
				/>
				<Input
					label="Phone Number"
					name="phoneNumber"
					placeholder="Phone Number"
					type="tel"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.phoneNumber}
				/>
				<Input
					placeholder="Description"
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.lastName}
				/>
			</section>
		);
	}
}

export default General;
