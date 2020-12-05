import React from 'react';

export function Ingredient(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return (
        <div>
            {props.label}:
            <input
                name='salt'
                value={this.state.salt === 0 ? '' : this.state.salt}
                type='text'
                placeholder='Salt'
                onChange={this.handleChange}>
            </input>
            <br />
        </div>
    )

    // return (<div className="todo-item">
    //     <input type="checkbox" checked={props.completed} onChange={() => props.onChange(props.id)}></input>
    //     <label style={props.completed ? completedStyle : null}>{props.text}</label> <br />
    // </div>);
}
