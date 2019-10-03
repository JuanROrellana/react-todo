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

    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        <h1>Title: {title}</h1>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </div>
    );
  }
}

// PropTypes
TodosItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodosItem;
