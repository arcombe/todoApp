import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';
import './Todos.css';
import PropType from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

// Proptypes
Todos.propTypes = {
  todos: PropType.array.isRequired
}

export default Todos;
