import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.name === 'mainTasks' || this.props.name === 'description') {
			return (
				<>
					<div className="input--container">
						<textarea
							name={this.props.name}
							placeholder={this.props.placeholder}
							onChange={this.props.handleChange}
							type={this.props.type}
							value={this.props.value}
						></textarea>
					</div>
				</>
			);
		}

		if (this.props.name !== 'mainTasks') {
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
	}
}

export default Input;
