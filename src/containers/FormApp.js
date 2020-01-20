import React from "react";

import FormContainer from "../components/Form/FormContainer";
import SimpleForm from "../components/Form/SimpleForm";

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <SimpleForm />
        <hr />
        <FormContainer />
      </React.Fragment>
    );
  }
}

export default FormApp;
