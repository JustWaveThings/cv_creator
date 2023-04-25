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
					label="First Name"
					name="firstName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.firstName}
				/>
				<Input
					label="Last Name"
					name="lastName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.lastName}
				/>
				<Input
					label="Email"
					name="email"
					placeholder="youremail@email.com"
					type="email"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.email}
				/>
				<Input
					label="Phone Number"
					name="phoneNumber"
					placeholder=" (888) 123-4567"
					type="tel"
					handleChange={this.props.handleChange}
					editStatus={this.props.editStatus}
					value={this.props.phoneNumber}
				/>
				<div>
					<button onClick={this.props.handleSubmit}>
						{this.props.editStatus ? 'Submit' : 'Edit'}
					</button>
				</div>
			</section>
		);
	}
}

export default General;
