import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Todos from './components/Todos/Todos';
import About from './components/About/About';
import axios from 'axios';


import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.markComplete = this.markComplete.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => (
        this.setState( {todos: res.data} )
      ));
  }

  markComplete = (x) => {
    console.log(x);
    this.setState({
      todos:  this.state.todos.map(todo => {
        if (todo.id === x.id) {
          console.log(x.id);
          todo.completed = !x.completed;
        }
        return todo;
      })
    })
    console.log(this.state);
  }

  addTodo = () => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: "something",
      completed: false
    }).then( res => (
      this.setState({todos: [...this.state.todos, res.data]})
    ));
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => (
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
      )
    )
  }

  render() {

    return (
      <BrowserRouter>
        <div className="container bg-dark pt-2 pb-2">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Todos todos={this.state.todos} markComplete={this.markComplete}/>
            </React.Fragment>)
          }/>
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
