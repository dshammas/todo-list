import React, { Component } from "react";

export class AddTodo extends Component {
    state ={
        title: ''
    }

    //you can use this as many time as you want with different inputs
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault(); //this will not submit into a file (submitting into file is the default)
        this.props.addTodo(this.state.title);
        this.setState({ title: '' }); //this is for clearing the field after submission
      }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          style={{
            flex: "5",
            padding: "15px",
            marginRight: "5px",
            marginBottom: "4px",
          }}
          name="title"
          placeholder="Add a task ..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Add"
          style={{
            flex: "1",
            cursor: "pointer",
            marginBottom: "4px",
          }}
        />
      </form>
    );
  }
}

export default AddTodo;
