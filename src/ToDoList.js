import React, { Component } from 'react';
import './App.css';
import ListItem from './ToDoListItem.js'

class List extends Component {
    render() {
        let listItems = this.props.listItems;
        let newListItems = [];
        for (let i = 0; i < listItems.length; i++) {
            newListItems.push(<ListItem
                deleteItem={this.props.deleteItem} 
                key={listItems[i].id} 
                id={listItems[i].id} 
                label={listItems[i].label} 
                checked={listItems[i].checked}
                checkItem={this.props.setChecked} />);
        }
        return (
            <div>
                <ul className="todo-list">
                {newListItems}
                </ul>
            </div>
        );
    }
}

export default List;