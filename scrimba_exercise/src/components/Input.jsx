import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const editStatus = this.props.editStatus;
		if (editStatus) {
			return (
				<>
					<div className="input--container">
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
			return (
				<>
					<div className="input--container">
						<div>{`${this.props.value}`}</div>
					</div>
				</>
			);
		}
	}
}
export default Input;
