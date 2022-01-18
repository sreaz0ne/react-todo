import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

function AddButton(props) {
  return (
    <input type="button" value={props.value} onClick={props.onClick} />
  );
}

function ToDo(props) {
  console.log(props.onChange);
  return (
    <div className="ToDo">
      <input type="checkbox" name="done" checked={props.done} onChange={props.onChange} />
      <input type="text" name="todo" value={props.value} onChange={props.onChange} />
    </div>
  );
}

function ToDoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <li key={todo.id}>
        <ToDo 
          value={todo.value} 
          done={todo.done}
          onChange={(e) => props.onChange(e, todo.id)}
        />
      </li>
    )
  });

  return (
    <ul>
      {todos}
    </ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.addToDo = this.addToDo.bind(this);
    this.handleToDoChange = this.handleToDoChange.bind(this);
  }  

  addToDo() {
    const id = this.state.todos.length > 0 ? Math.max.apply(null, this.state.todos.map(todo => todo.id)) + 1:1;
    const todos = this.state.todos.slice();
    todos.push(
      {
        id:id, 
        value:"",
        done: false
      }
    );
    this.setState({
      todos: todos
    });
  }

  handleToDoChange(e, id) {
    const inputName = e.target.name;
    const todos = this.state.todos.slice();
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (inputName === "done") {
      todos[todoIndex].done = !this.state.todos[todoIndex].done;
    } else if (inputName === "todo") {
      todos[todoIndex].value = e.target.value
    }

    this.setState({
      todos: todos
    });
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="App">
        <AddButton value="Ajouter une tâche" onClick={this.addToDo} />
        <ToDoList todos={todos} onChange={this.handleToDoChange} />
      </div>
    );
  }
}

export default App;
