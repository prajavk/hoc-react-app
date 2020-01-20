import React from "react";

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkmsg: "",
      request: "",
      fname: "react",
      desc: "write about react!",
      flavor: "coconut",
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* common handler */
  handleFieldChange(event) {
    const { name, value } = event.target;
    // this.setState({name: event.target.value});
    this.setState({ [name]: value });
  }

  /* checkbox handler */
  handleInputChange(event) {
    const target = event.target;
    const { name, value } = target;
    let newValue = null;
    // value always "on" for checkbox
    if (target.type === "checkbox") {
      newValue = target.checked ? true : false;
    }
    console.log("check event", value, newValue);

    this.setState((prevState, props) => {
      return {
        msg: newValue ? "checked" : "unchecked",
        [name]: !prevState.isGoing
      };
    });

    /*
    this.setState(
        {
          msg: val ? "checked" : "unchecked"
        },
        (prevState) => {
          console.log('callback after state updated');
        }
      );
    */
    /*
    this.setState({
      [name]: val
    });
    */
  }

  /* one submit action */
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // Create a test FormData object
    const data = new FormData(form);
    // console.log("Form data to send: ", data);
    console.log("Form was submitted: ", this.state);
    // Display the values
    for (var val of data.values()) {
      console.log("field:", val);
    }
    this.setState({
      request: stringifyFormData(data)
    });

    /* call backend
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    */
  }

  render() {
    const { fname, desc, flavor, isGoing } = this.state;
    let msg = "";
    if (isGoing) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <React.Fragment>
        <form className="container-fluid" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="fname">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={this.handleFieldChange}
            />

            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={desc}
              name="desc"
              onChange={this.handleFieldChange}
            />

            <label className="form-label">Pick flavor</label>
            <select
              className="form-control"
              value={flavor}
              onChange={this.handleFieldChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>

            <div className="form-group">
              <label className="form-label">Is going</label>
              <input
                className="form-checkbox"
                name="isGoing"
                id="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
              <p>this box is {msg}.</p>
            </div>

            <label className="form-label">No of guests</label>
            <input
              className="form-control"
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleFieldChange}
            />

            <input type="submit" className="btn btn-primary" value="Submit" />
            {/* <button className="btn">Clear</button> */}
          </div>
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

export default SimpleForm;
