import React, { Component } from "react";
import "../index.css";

class Display extends Component {
  render() {
    return (
      <>
        {this.props.editable && (
          <section className="display-main-cont">
            <header className="header">
              <h1 className="display-header">
                {this.props.firstName} {this.props.lastName}
              </h1>
              <span className="display-title">{this.props.title}</span>
            </header>
            <div className="main-cont">
              <section className="sidebar">
                <section className="contact">
                  <h5>Contact</h5>
                  <div className="display-info-cont">
                    <div className="label">Address</div>
                    <div className="value">{this.props.address}</div>
                  </div>
                  <div className="display-info-cont">
                    <div className="label">Email</div>
                    <div className="value email">{this.props.email}</div>
                  </div>
                  <div className="display-info-cont">
                    <div className="label">Phone Number</div>
                    <div className="value phone">{this.props.phoneNumber}</div>
                  </div>
                </section>
              </section>
              <main className="main">
                <section className="display-description">
                  <h5>Objective</h5>
                  <div className="description-value">
                    {this.props.description}
                  </div>
                </section>
                <section className="display-education">
                  <h5>Education</h5>
                  {this.props.educationArray.map((edu) => {
                    return (
                      <div key={edu.id} className="display-edu-cont">
                        <div className="display-info-cont">
                          <div className="value year">{edu.graduatedYear}</div>
                          <div className="edu-right">
                            <div className="edu-name-city">
                              <div className="value">
                                {edu.institutionName},
                              </div>
                              <div className="value">{edu.city}</div>
                            </div>
                            <div className="display-info-cont">
                              <div className="label">
                                Degree or Certification:
                              </div>
                              <div className="value">{edu.degree}</div>
                            </div>
                            <div className="display-info-cont">
                              <div className="label">GPA:</div>
                              <div className="value">{edu.gpa}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </section>
                <section className="display-experience">
                  <h5>Experience</h5>
                  {this.props.experienceArray.map((exp) => {
                    return (
                      <div key={exp.id} className="display-exp-cont">
                        <div className="value year">
                          {exp.fromDate} - {exp.toDate}
                        </div>

                        <div className="value title">{exp.positionTitle}</div>
                        <div className="comp-location">
                          <div className="value">{exp.companyName}</div>
                          <div className="value">{exp.location}</div>
                        </div>

                        <div className="value">{exp.mainTasks}</div>
                      </div>
                    );
                  })}
                </section>
              </main>
            </div>
          </section>
        )}
        {this.props.editable && !this.props.hideButtonsState && (
          <nav className="nav-preview buttonContainer">
            <button className="display" onClick={this.props.handleSubmit}>
              {this.props.editable ? "Display Input Fields" : "Display Resume"}
            </button>
            <button className="hide" onClick={this.props.handleHideButtons}>
              Hide these Buttons for Printing and Saving Resume - this is
              irreversable!!!
            </button>
          </nav>
        )}
      </>
    );
  }
}

export default Display;
