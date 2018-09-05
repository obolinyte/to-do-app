import React, { Component } from 'react';
import './App.css';
import ListItem from './ToDoListItem.js'

class List extends Component {
    render() {
        return (
            <div>
                <ul className="todo-list">
                <ListItem />
                <ListItem />
                </ul>
            </div>
        );
    }
}

export default List;