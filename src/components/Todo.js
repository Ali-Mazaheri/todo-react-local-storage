import React, { Component } from "react"
import { TodoList } from "./TodoList"
import { TodoModel } from "../models/TodoModel"
import {LocalStorageService} from "../services/LocalStorageService"

export class Todo extends Component{
    storage = null;
    constructor() {
        super();
        this.state = { data: [] };
        this.storage = new LocalStorageService("reactTodoStorage");
    }
    render() { 
        //this.getTodos();
        return (
            <div className="toDoMain">
                <input ref="inp" placeholder="Add New To Do"></input>
                <span className="add button" onClick={this.addToList.bind(this)}>&#x271A;</span>
                <br/>
                ......................................................
                <br/>
                <TodoList todoUpdated={this.todoUpdated.bind(this)} removeItem={this.removeItem.bind(this)} todos={this.state.data} />
            </div>
        );
    }

    todoUpdated(todo) { 
        this.storage.write(this.state.data);
    }

    addToList() { 
        let val = this.refs.inp.value || "New Item";
        if (val && val.length) { 
            this.state.data.push(new TodoModel(val));
            this.setState(this.state.data);
            this.refs.inp.value = "";
            this.storage.write(this.state.data);
        }
    }
    removeItem(todo) { 
        let ind = this.state.data.indexOf(todo);
        
        if (ind > -1) {
            this.state.data.splice(ind, 1);
            this.setState(this.state.data);
            this.storage.write(this.state.data);
        }
    }
    componentDidMount() { 
        if (this.storage) { 
            let res = this.storage.getAll();
            this.setState({ data: res });
        }
    }
}