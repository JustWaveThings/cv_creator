import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<div className="input--container">
					<input
						name={this.props.name}
						placeholder={this.props.placeholder}
						onChange={this.props.handleChange}
						type={this.props.type}
					></input>
				</div>
			</>
		);
	}
}
export default Input;
