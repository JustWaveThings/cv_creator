import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
	render() {
		return (
			<section className=" general ">
				<h2>Contact Information</h2>

				<Input
					label="First Name"
					name="firstName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
				/>
				<Input
					label="Last Name"
					name="lastName"
					placeholder=""
					type="text"
					handleChange={this.props.handleChange}
				/>
				<Input
					label="Email"
					name="email"
					placeholder=" youremail@email.com"
					type="email"
					handleChange={this.props.handleChange}
				/>
				<Input
					label="Phone Number"
					name="phoneNumber"
					placeholder=" (888) 123-4567"
					type="tel"
					handleChange={this.props.handleChange}
				/>
				<div>
					<button>Edit</button>
					<button>Submit</button>
				</div>
			</section>
		);
	}
}

export default General;
