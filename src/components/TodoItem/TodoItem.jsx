import React, {Component} from 'react';
import './TodoItem.css';
import PropType from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding:' 10px',
      borderBottom: '2px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  render() {

    let todo = this.props.todo;

    return (
      <div className="container" style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, todo)}/>
          {' '}
          {todo.title}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropType.object.isRequired
}

export default TodoItem;
