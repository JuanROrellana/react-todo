import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChangeTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChangeTodo}
        />
        <input type="submit" className="btn" style={{ flex: "1" }} />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
