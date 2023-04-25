import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const editStatus = this.props.editStatus;
		if (editStatus) {
			// console.log('Value: ', this.props.value);
			return (
				<>
					<div className="input--container">
						<label htmlFor={this.props.name}>{this.props.label}: </label>
						<input
							name={this.props.name}
							placeholder={this.props.placeholder}
							onChange={this.props.handleChange}
							type={this.props.type}
							value={this.props.value}
						></input>
					</div>
				</>
			);
		}
		if (!editStatus) {
			// console.log('Value: ', this.props.value);
			return (
				<>
					<div className="input--container">
						<label htmlFor={this.props.name}>{this.props.label}: </label>
						<div>{`${this.props.value}`}</div>
					</div>
				</>
			);
		}
	}
}
export default Input;
