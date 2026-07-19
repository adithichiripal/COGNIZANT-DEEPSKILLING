import React, { Component } from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";

class App extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    sayHello = () => {
        alert("Hello! Welcome to React Events.");
    }

    handleIncrement = () => {
        this.increment();
        this.sayHello();
    }

    sayWelcome = (message) => {
        alert(message);
    }

    onPress = () => {
        alert("I was clicked");
    }

    render() {

        return (

            <div style={{ margin: "20px" }}>

                <h2>Counter : {this.state.count}</h2>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.onPress}>
                    Synthetic Event
                </button>

                <hr />

                <CurrencyConvertor />

            </div>

        );

    }

}

export default App;
