import React, { Component } from "react";
import Input from "./Input";

class Education extends Component {
  render() {
    return (
      <>
        <section className="education">
          <Input
            name="institutionName"
            placeholder="Institution Name"
            type="text"
            handleChange={this.props.handleChange}
            value={this.props.institutionName}
          />
          <Input
            name="city"
            placeholder="City"
            type="text"
            handleChange={this.props.handleChange}
            value={this.props.city}
          />
          <Input
            name="degree"
            placeholder="Degree or Certification"
            type="text"
            handleChange={this.props.handleChange}
            value={this.props.degree}
          />
          <Input
            name="gpa"
            placeholder="GPA"
            type="text"
            handleChange={this.props.handleChange}
            value={this.props.gpa}
          />
          <Input
            name="graduatedYear"
            placeholder="Year Completed"
            type="text"
            handleChange={this.props.handleChange}
            value={this.props.graduatedYear}
          />
        </section>
        <div className="button-container">
          <button
            className="delete"
            onClick={this.props.handleDeleteEdu}
            id={this.props.id}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default Education;
