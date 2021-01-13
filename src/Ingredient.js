import React from 'react';
import { PropTypes } from 'react'

// export default function Ingredient(props) {

// const completedStyle = {
//     fontStyle: "italic",
//     color: "#cdcdcd",
//     textDecoration: "line-through"
// };
export default class Ingredient extends React.Component {
    constructor(props) {
        super(props);
        console.log("props from childp", props);
        // this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.label}:
                <input
                    name={this.props.text}
                    value={this.props.amount === 0 ? '' : this.props.amount}
                    type='text'
                    placeholder={this.props.label}
                    onChange={() => this.props.handleChange()}>
                </input>
                <br />
            </div>
        )
    }

    // return (<div className="todo-item">
    //     <input type="checkbox" checked={props.completed} onChange={() => props.onChange(props.id)}></input>
    //     <label style={props.completed ? completedStyle : null}>{props.text}</label> <br />
    // </div>);
}
