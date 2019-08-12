import React, { Component } from 'react'
import logo from './logo.svg'
import './app.css'
import { Todo } from "./src/components/Todo"

export class App extends Component {
  render() {
    return (
      <div className="application">
        <br/>
          <Todo />
      </div>
    );
  }
}
