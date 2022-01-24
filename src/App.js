import React from 'react';
import './App.css';
import ToDo from './ToDo';

function ToDoHeader(props) {
  return (
    <div className="ToDoHeader">
      <input type="button" value="Ajouter une tâche" onClick={props.onClick} />
    </div>
  );
}

function ToDoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <li key={todo.id}>
        <ToDo 
          title={todo.title} 
          done={todo.done}
          description={todo.description}
          dueDate={todo.done}
          onChange={(e) => props.onChange(e, todo.id)}
          onClick={(e) => props.onClick(e, todo.id)}
        />
      </li>
    )
  });

  return (
    <ul className='ToDoList'>
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
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }  

  addToDo() {
    const id = this.state.todos.length > 0 ? Math.max.apply(null, this.state.todos.map(todo => todo.id)) + 1:1;
    const todos = this.state.todos.slice();
    todos.push(
      {
        id:id, 
        title: null,
        done: false,
        description: null,
        dueDate: null
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
    } else if (inputName === "title") {
      todos[todoIndex].title = e.target.value
    } else if (inputName === "description") {
      todos[todoIndex].description = e.target.value
    } else if (inputName === "dueDate") {
      todos[todoIndex].dueDate = e.target.value
    }

    this.setState({
      todos: todos
    });
  }

  handleTodoClick(e, id) {
    const inputName = e.target.name;
    const todos = this.state.todos.slice();
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (inputName === "delete") {
      todos.splice(todoIndex, 1);

      this.setState({
        todos: todos
      });
    }
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="App">
        <ToDoHeader onClick={this.addToDo} />
        <ToDoList 
          todos={todos} 
          onChange={this.handleToDoChange} 
          onClick={this.handleTodoClick}
        />
      </div>
    );
  }
}

export default App;
