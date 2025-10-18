import React, { Component } from 'react';
import { handleMount } from './mountFunctions';
import { handleUpdate } from './updateFunctions';

export default class LifeCycles extends Component {
    constructor() {
        super();
        this.state = {
            value: "welcome",
            name: "guys"
        }
    }

    componentDidMount() {
        handleMount(this.setState.bind(this));
    }

    change = () => {
        if (window.confirm("Do you want to change the value?")) {
            this.setState({
                value: "Good evening"
            });
        }
    }

    componentDidUpdate() {
        handleUpdate();
    }

    shouldComponentUpdate() {
        return true;
    }

    delete = () => {
        this.setState({
            value: false
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value} {this.state.name}</h2>
                <button onClick={this.change}>Change</button>
                <h2 id='one'></h2>
                <button onClick={this.delete}>Delete</button>
            </div>
        )
    }
}
