import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true
      },
      {
        id: 3,
        title: "Meating with boss",
        completed: false
      }
    ]
  };

  markComplete = e => {
    console.log(e);
  };

  render() {  
    return (
      <div className="App">
        <h1>App</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        ></Todos>
      </div>
    );
  }
}

export default App;
