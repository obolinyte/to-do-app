import React, { Component } from 'react';
import './App.css';
import ToDoInputField from './ToDoInputField';
import ToDoList from './ToDoList.js';
import ToDoFooter from './ToDoFooter.js';
import uuidv4 from 'uuid/v4';

class Input extends Component {
    constructor(props) {
        super(props);

        let todos = [];
        this.state = {
            listItems: todos,
        }
        this.addNewToDo = this.addNewToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.setChecked= this.setChecked.bind(this);
        this.setChecked= this.setChecked.bind(this);
        this.countPending=this.countPending.bind(this);
        this.deleteCompleted=this.deleteCompleted.bind(this);
    }

    addNewToDo(label) {
        let newToDo = {
            checked: false,
            label: label,
            id:uuidv4()
        }
        let currentItems = this.state.listItems;
        currentItems.push(newToDo)
        this.setState({
            listItems: currentItems,
        });
    }

    deleteToDo(id) {
        let updatedList = [];
        let currentList = this.state.listItems;
        for (let i = 0; i < currentList.length; i++) {
            if (id != currentList[i].id) {
                updatedList.push(currentList[i])
            }
        }
        this.setState({
            listItems: updatedList,
        });
    }

    setChecked(id) {
        let currentList=this.state.listItems;
        for (let i=0; i<currentList.length; i++) {
            if (id === currentList[i].id) {
                currentList[i].checked=!currentList[i].checked
            }
          
        }
        this.setState({
            listItems: currentList,
        });
    }

    countCompleted() {
        let currentList=this.state.listItems;
        let completedList=[];
        for (let i=0; i<currentList.length; i++) {
            if (currentList[i].checked) {
                completedList.push(currentList[i])
            }
        }
        return completedList.length;
    }

    deleteCompleted() {
        let currentList=this.state.listItems;
        let updatedList=[];
        for (let i=0; i<currentList.length; i++) {
            if (!currentList[i].checked) {
                updatedList.push(currentList[i])
            }
        }
        this.setState({
            listItems: updatedList,
        });
    }

    countPending() {
        return this.state.listItems.length-this.countCompleted();
    }


    render() {
        return (
            <main>
                <ToDoInputField addNewToDo={this.addNewToDo} />
                <ToDoList listItems={this.state.listItems}  deleteItem={this.deleteToDo} setChecked={this.setChecked}/>
                <ToDoFooter completed={this.countCompleted()} pending={this.countPending()} deleteCompleted={this.deleteCompleted}/>
            </main>
        );
    }
}

export default Input;