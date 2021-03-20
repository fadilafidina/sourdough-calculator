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
        let ratioToDisplay = this.props.ratio === 0 ? '' : this.props.ratio * 100;

        return (
            <div class="pair">


                <div class="left">

                    <div class="label">
                        {this.props.label}
                    </div>

                    <input
                        name={this.props.text}
                        value={ratioToDisplay}
                        type='text'
                        placeholder={`Ratio of ${this.props.label}`} // no place holder
                        onChange={(e) => this.props.handleChangeRatio(e, this.props.id)}>
                    </input> %
                    <br />
                </div >

                < div class="right">

                    Amount:
                <input
                        name={this.props.text}
                        value={this.props.amount === 0 ? '' : this.props.amount}
                        type='text'
                        placeholder={this.props.label}
                        onChange={(e) => this.props.handleChange(e, this.props.id)}>
                    </input> grams

                < br />
                </div>
            </div >
        )
    }

    // return (<div className="todo-item">
    //     <input type="checkbox" checked={props.completed} onChange={() => props.onChange(props.id)}></input>
    //     <label style={props.completed ? completedStyle : null}>{props.text}</label> <br />
    // </div>);
}
