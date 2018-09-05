import React, { Component } from 'react';
import './App.css';

class Input extends Component {
    render() {
        return (
            <div>
                <form>
                    <input className="new-todo" type="text" name="new"  placeholder="New task" autoComplete="off"/>
                </form>
            </div>
        );
    }
}

export default Input;