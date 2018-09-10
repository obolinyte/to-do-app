import React, { Component } from 'react';
import './App.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value=='' ) {
            this.textInput.focus();
        } else {
            this.props.addNewToDo(this.state.value);
        }
        
        this.setState({ value: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  ref={(input) => { this.textInput = input; }} className="new-todo" type="text" name="new" placeholder="New task" autoComplete="off" value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default Input;