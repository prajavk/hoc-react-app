import React from "react";
import "./styles.css";

import ToDo from "./Todo";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [
      { name: "Buy a beer", isFinished: false },
      { name: "Wash my armpits", isFinished: false },
      { name: "Shave bikini surroundings", isFinished: false },
      { name: "Look for mistakes in LOTR Trilogy", isFinished: false }
    ]
  };

  myCallback = dataFromAddTodo => {
    const newTodo = { name: dataFromAddTodo, isFinished: false };
    this.setState(() => ({ todos: [...this.state.todos, newTodo] }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.todos.map((todo, idx) => (
          <ToDo name={todo.name} isFinished={todo.isFinished} key={idx} />
        ))}
        <AddTodo onAdded={this.myCallback} />
      </React.Fragment>
    );
  }
}

export default App;
