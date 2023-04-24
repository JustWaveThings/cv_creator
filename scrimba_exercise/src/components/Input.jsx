import React, { Component } from 'react';

class Input extends Component {
	render() {
		return (
			<>
				<div>
					<label htmlFor={this.props.name}>{this.props.label}: </label>
					<input
						name={this.props.name}
						placeholder={this.props.placeholder}
						onChange={this.props.handleChange}
					></input>
				</div>
			</>
		);
	}
}

export default Input;
