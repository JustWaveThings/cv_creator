import React, { Component } from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { nanoid } from "nanoid";
import Display from "./components/Display";
import General from "./components/General";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
      hideButtons: false,
      firstName: "Jane",
      lastName: "Smith",
      title: "Full Stack Web Developer",
      email: "Jane.Smith@duck.com",
      phoneNumber: "(808)-867-5309",
      address: "123 Anyplace St, Honolulu, HI 96815",
      description:
        "Detail-oriented and innovative Full Stack Web Developer with a strong proficiency in React, seeking a challenging position to leverage extensive technical skills and experience. Eager to contribute to the design, development, and optimization of cutting-edge web applications, while fostering a collaborative environment and staying updated on the latest industry trends. Committed to delivering high-quality, scalable, and maintainable solutions that exceed client expectations and drive business growth.",
      education: [
        {
          id: nanoid(),
          institutionName: "Northridge Institute of Technology",
          city: "Springfield",
          degree: "Bachelor of Science in Computer Science",
          gpa: "3.85",
          graduatedYear: "2021",
        },
      ],
      experience: [
        {
          id: nanoid(),
          companyName: "TechPioneers Inc.",
          positionTitle: "Full Stack Web Developer",
          location: "San Francisco, CA",
          mainTasks:
            "Developed and maintained web applications using React and Node.js, integrated RESTful APIs, and optimized application performance.",
          fromDate: "June 2021",
          toDate: "Present",
        },
        {
          id: nanoid(),
          companyName: "Innovative Solutions Ltd.",
          positionTitle: "Front-end Developer Intern",
          location: "New York, NY",
          mainTasks:
            "Collaborated with design and development teams to create responsive and interactive UI components using React, HTML, and CSS.",
          fromDate: "May 2020",
          toDate: "August 2020",
        },
        {
          id: nanoid(),
          companyName: "StartupHub",
          positionTitle: "Freelance Web Developer",
          location: "Remote",
          mainTasks:
            "Built and deployed custom websites and applications for various clients, implementing responsive design and modern JavaScript frameworks.",
          fromDate: "January 2019",
          toDate: "May 2021",
        },
      ],
    };
  }

  handleChange = (e, eduIndex) => {
    const inputSection = e.target.parentElement.parentElement.className;

    if (inputSection === "general") {
      this.setState((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
    if (inputSection === "education") {
      this.setState((prevState) => {
        const updatedEducation = prevState.education.map((edu, index) => {
          if (index === eduIndex) {
            return {
              ...edu,
              [e.target.name]: e.target.value,
            };
          }
          return edu;
        });
        return {
          ...prevState,
          education: updatedEducation,
        };
      });
    }
    if (inputSection === "experience") {
      this.setState((prevState) => {
        const updatedExperience = prevState.experience.map((exp, index) => {
          if (index === eduIndex) {
            return {
              ...exp,
              [e.target.name]: e.target.value,
            };
          }
          return exp;
        });
        return {
          ...prevState,
          experience: updatedExperience,
        };
      });
    }
  };

  handleSubmit = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        editable: !prevState.editable,
      };
    });
  };

  handleAddNewEdu = () => {
    this.setState((prevState) => {
      const newEdu = {
        id: nanoid(),
        institutionName: "",
        city: "",
        degree: "",
        gpa: "",
        graduatedYear: "",
      };

      return {
        ...prevState,
        education: [...prevState.education, newEdu],
      };
    });
  };
  handleDeleteEdu = (e, eduIndex) => {
    this.setState((prevState) => {
      const updatedEducation = prevState.education.filter((edu, index) => {
        return index !== eduIndex;
      });
      return {
        ...prevState,
        education: updatedEducation,
      };
    });
  };

  handleAddNewExp = () => {
    this.setState((prevState) => {
      const newExp = {
        id: nanoid(),
        companyName: "",
        positionTitle: "",
        location: "",
        mainTasks: "",
        fromDate: "",
        toDate: "",
      };

      return {
        ...prevState,
        experience: [...prevState.experience, newExp],
      };
    });
  };

  handleDeleteExp = (e, expIndex) => {
    this.setState((prevState) => {
      const updatedExperience = prevState.experience.filter((exp, index) => {
        return index !== expIndex;
      });
      return {
        ...prevState,
        experience: updatedExperience,
      };
    });
  };

  handleHideButtons = () => {
    console.log("hide buttons");
    this.setState((prevState) => {
      return {
        ...prevState,
        hideButtons: !prevState.hideButtons,
      };
    });
  };

  handleReset = () => {
    this.setState({
      editable: true,
      hideButtons: false,
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phoneNumber: "",
      address: "",
      description: "",
      education: [
        {
          id: nanoid(),
          institutionName: "",
          city: "",
          degree: "",
          gpa: "",
          graduatedYear: "",
        },
      ],
      experience: [
        {
          id: nanoid(),
          companyName: "",
          positionTitle: "",
          location: "",
          mainTasks: "",
          fromDate: "",
          toDate: "",
        },
      ],
    });
  };

  render() {
    return (
      <>
        {this.state.editable && (
          <div className="input-cont">
            <nav className="navbar">
              <h1>RESUME CREATOR</h1>
            </nav>
            <main>
              <section className="input">
                <h4>Contact Information</h4>
                <General
                  handleChange={(e) => this.handleChange(e)}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  phoneNumber={this.state.phoneNumber}
                  address={this.state.address}
                  description={this.state.description}
                  title={this.state.title}
                />
                <h4>Education</h4>
                {this.state.education.map((edu, index) => {
                  return (
                    <div className="edu-cont" key={edu.id}>
                      <Education
                        handleDeleteEdu={(e) => this.handleDeleteEdu(e, index)}
                        handleChange={(e) => this.handleChange(e, index)}
                        institutionName={edu.institutionName}
                        city={edu.city}
                        degree={edu.degree}
                        gpa={edu.gpa}
                        graduatedYear={edu.graduatedYear}
                      />
                    </div>
                  );
                })}
                <div className="button-container">
                  <button className="add" onClick={this.handleAddNewEdu}>
                    Add Education
                  </button>
                </div>
                <h4>Experience</h4>
                {this.state.experience.map((exp, index) => {
                  return (
                    <div className="exp-cont" key={exp.id}>
                      <Experience
                        handleDeleteExp={(e) => this.handleDeleteExp(e, index)}
                        handleChange={(e) => this.handleChange(e, index)}
                        companyName={exp.companyName}
                        positionTitle={exp.positionTitle}
                        mainTasks={exp.mainTasks}
                        fromDate={exp.fromDate}
                        toDate={exp.toDate}
                        location={exp.location}
                      />
                    </div>
                  );
                })}
                <div className="button-container">
                  <button className="add" onClick={this.handleAddNewExp}>
                    Add Experience
                  </button>
                </div>
              </section>
              <nav className="nav-preview button-container">
                <button className="display" onClick={this.handleSubmit}>
                  {!this.state.editable
                    ? "Display Input Fields"
                    : "Display Resume"}
                </button>
                <button className="delete" onClick={this.handleReset}>
                  Erase Sample Data
                </button>
              </nav>
            </main>
            <footer>
              <p>© JustWaveThings</p>
            </footer>
          </div>
        )}
        <Display
          key={this.state.id}
          editable={!this.state.editable}
          handleSubmit={this.handleSubmit}
          hideButtonsState={this.state.hideButtons}
          handleHideButtons={this.handleHideButtons}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          address={this.state.address}
          description={this.state.description}
          title={this.state.title}
          educationArray={this.state.education}
          experienceArray={this.state.experience}
        />
      </>
    );
  }
}

export default App;
