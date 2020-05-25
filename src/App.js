import React from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component {

  state = {
    todos: [
      { id: 1, content: 'buy some drink' },
      { id: 2, content: 'Play mario kart' }
    ]
  }

  addTodo = (newTodo) => {

    newTodo.id = Math.random()
    let newtodo = [...this.state.todos, newTodo]

    this.setState({
      todos : newtodo
    })
  }

  deleteTodo = (id) => {
    let updatedTodoList = this.state.todos.filter((todo) => { return todo.id !== id })
    this.setState({
      todos: updatedTodoList
    })
  }

  render() {
    return (

      <div className="todo-app container">
        <h1 className="center blue-text">todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} addTodo={this.addTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>



    )
  }
}

export default App;
