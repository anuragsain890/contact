import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (i) => {
    i.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("fields are empty!");
      return;
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
    }
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="eg:Name"
              value={this.state.name}
              onChange={(i) => this.setState({ name: i.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="eg:Name@email.com"
              value={this.state.email}
              onChange={(i) => this.setState({ email: i.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
