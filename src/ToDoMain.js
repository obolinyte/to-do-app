import React, { Component } from 'react';
import './App.css';
import ToDoInputField from './ToDoInputField';
import ToDoList from './ToDoList.js';

class Input extends Component {
    render() {
        return (
            <main>
                <ToDoInputField />
                <ToDoList />
            </main>
        );
    }
}

export default Input;