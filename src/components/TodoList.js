import React, { Component } from "react"
import { TodoItem } from "./TodoItem"

export class TodoList extends Component{
    render() { 

        let todoList = this.props.todos || [];
        return (
            <div className="todoList">
              
                        {todoList.map(x => {
                    return <TodoItem key={x.id} todoUpdated={this.todoUpdated.bind(this)} remove={this.removeItem.bind(this)} todo={x} />
                        })}
                    
            </div>
            
        );
    }
    
    removeItem(todo) { 
        this.props.removeItem(todo);
    }
    
    todoUpdated(todo) {
        this.props.todoUpdated(todo);
     }
}