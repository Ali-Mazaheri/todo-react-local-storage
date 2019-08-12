import React, { Component } from "react"

export class TodoItem extends Component{
    constructor() { 
        super();
        this.state = { todo: {}}
    }
    render() { 
        let todo = this.state.todo || {};
        return (
            <div className="toDoItem">
                <input id={"CH" + todo.id} type="checkbox" checked={todo.completed} onChange={(e)=>this.finished(e.target.checked, todo )} />
                <label htmlFor={"CH" + todo.id}></label>
                <input onChange={this.onEditItem.bind(this, todo)} type="text" ref="t1" value={todo.title} />
                <span className="delete button" onClick={this.remove.bind(this, todo)}>&#x2716;</span>
            </div>
        );
    }
    
    onEditItem(todo) {
        todo.title = this.refs.t1.value;
        this.setState({todo: todo});
        this.props.todoUpdated(todo);
    }
    componentDidMount() { 
        let todo = this.props.todo || {};
        this.setState({ todo: todo });
    }
    finished(state, todo) { 
        todo.completed = state;
        this.setState({ todo: todo });
        this.props.todoUpdated(todo);
    }
    remove(todo) { 
        this.props.remove(todo);
    }
}