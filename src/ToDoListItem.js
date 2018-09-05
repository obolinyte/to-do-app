import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    render() {
        return (
                    <li>
                    <input className="complete-checkbox" type="checkbox" name="" value=""/>
                    <label className="todo-list-item">List item 1</label>
                    <button className="delete icon-trash-o"></button>
                    </li>
        );
    }
}

export default ListItem;