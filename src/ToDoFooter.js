import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul className="todo-footer">
                <li>Pending: <span>{this.props.pending}</span></li>
                <li>Completed: <span>{this.props.completed}</span></li>
                <li className="delete-completed" onClick={this.props.deleteCompleted}>Clear completed</li>
                </ul>
            </footer>
        );
    }
}

export default Footer;