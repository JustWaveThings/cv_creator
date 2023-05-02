import React, { Component } from "react";
import Input from "./Input";

class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="general">
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
          value={this.props.lastName}
        />
        <Input
          name="title"
          placeholder="Title"
          type="text"
          handleChange={this.props.handleChange}
          value={this.props.title}
        />
        <Input
          name="address"
          placeholder="Address"
          type="text"
          handleChange={this.props.handleChange}
          value={this.props.address}
        />

        <Input
          name="email"
          placeholder="Email"
          type="email"
          handleChange={this.props.handleChange}
          value={this.props.email}
        />
        <Input
          name="phoneNumber"
          placeholder="Phone Number"
          type="tel"
          handleChange={this.props.handleChange}
          value={this.props.phoneNumber}
        />
        <Input
          name="description"
          placeholder="Description"
          type="text"
          handleChange={this.props.handleChange}
          value={this.props.description}
        />
      </section>
    );
  }
}

export default General;
