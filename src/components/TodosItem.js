import React, { Component } from "react";
import PropTypes from "prop-types";

class TodosItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };  

  render() {
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete} />
        <h1>Title: {this.props.todo.title}</h1>
      </div>
    );
  }
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodosItem;
