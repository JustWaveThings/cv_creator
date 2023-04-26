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
					name="firstName"
					placeholder="First Name"
					type="text"
					handleChange={this.props.handleChange}
					value={this.props.firstName}
				/>
				<Input
					name="lastName"
					placeholder="Last Name"
					type="text"
					handleChange={this.props.handleChange}
				/>
				<Input
					name="title"
					placeholder="Title"
					type="text"
					handleChange={this.props.handleChange}
				/>
				<Input
					name="address"
					placeholder="Address"
					type="text"
					handleChange={this.props.handleChange}
				/>

				<Input
					name="email"
					placeholder="Email"
					type="email"
					handleChange={this.props.handleChange}
				/>
				<Input
					name="phoneNumber"
					placeholder="Phone Number"
					type="tel"
					handleChange={this.props.handleChange}
				/>
				<Input
					name="description"
					placeholder="Description"
					type="text"
					handleChange={this.props.handleChange}
				/>
			</section>
		);
	}
}

export default General;
