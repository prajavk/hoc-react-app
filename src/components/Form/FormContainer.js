// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
import React, { Component } from "react";

/* Import Components */
import CheckBox from "./fields/CheckBox";
import Input from "./fields/Input";
import Select from "./fields/Select";
import Button from "./fields/Button";
import TextArea from "./fields/TextArea";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: "",
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: ["Development"],
        about: ""
      },
      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSkillsCheckBox = this.handleSkillsCheckBox.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  // Form submission logic
  handleFormSubmit(event) {
    event.preventDefault();
    let userData = this.state.newUser;
    const form = event.target;
    // Create a test FormData object
    const data = new FormData(form);
    console.log("form data", data, userData);
    this.setState({
      request: JSON.stringify(userData)
    });

    /*
    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
    */
  }
  // Logic for resetting the form
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      request: "",
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, name: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, age: value } }),
      () => console.log(this.state.newUser)
    );
  }
  // handleInput() will replace both handleFullName() and handleAge()
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        };
      },
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleSkillsCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  render() {
    return (
      <React.Fragment>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            type={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleFieldChange={this.handleFullName}
          />
          {/* Name of the user */}
          <Input
            type={"number"}
            title={"Age"}
            name={"age"}
            value={this.state.newUser.age}
            placeholder={"Enter age"}
            handleFieldChange={this.handleAge}
          />
          {/* Age */}
          <Select
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleFieldChange={this.handleInput}
          />{" "}
          {/* Gender Selection */}
          <CheckBox
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleFieldChange={this.handleSkillsCheckBox}
          />
          {/* List of Skills (eg. Programmer, developer) */}
          <TextArea
            title={"About you."}
            rows={10}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handleFieldChange={this.handleTextArea}
            placeholder={"Describe your past experience and skills"}
          />
          {/* About you */}
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}
        </form>
        {this.state.request && (
          <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.request}</pre>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

/*
function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}*/
export default FormContainer;
