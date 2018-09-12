import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
    }
    deleteItem() {
        this.props.deleteItem(this.props.id)
    }

    checkItem() {
        this.props.checkItem(this.props.id)
    }

    render() {
        let strikethrough = {
            textDecoration: "line-through"
        }
        let styles = this.props.checked ? strikethrough : {}
        return (
                    <li>
                    <input checked={this.props.checked} onChange={this.checkItem} 
                    className="complete-checkbox" type="checkbox" name="" value="" />
                    <label className="todo-list-item" style={styles}>{this.props.label}</label>
                    <button className="delete icon-trash-o" onClick={this.deleteItem}></button>
                    </li>
        );
    }
}

export default ListItem;