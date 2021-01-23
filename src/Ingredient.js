import React from 'react';

// export default function Ingredient(props) {

//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#cdcdcd",
//         textDecoration: "line-through"
//     };
export default class Ingredient extends React.Component {
    constructor(props) {
        super(props);
        console.log("props from child!!!!!!!!!!!!!", props);
    }

    render() {
        return (
            <div>
                {this.props.label}
                <br />
            Percentage: {`${this.props.ratio * 100} %`}
                <br />

                <input
                    name={this.props.text}
                    value={this.props.amount === 0 ? '' : this.props.amount}
                    type='text'
                    placeholder={this.props.label}
                    onChange={(e) => this.props.handleChange(e, this.props.id)}>
                </input>
                <br />
            </div >
        )
    }

    // return (<div className="todo-item">
    //     <input type="checkbox" checked={props.completed} onChange={() => props.onChange(props.id)}></input>
    //     <label style={props.completed ? completedStyle : null}>{props.text}</label> <br />
    // </div>);
}
