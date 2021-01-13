import React from 'react';

export default class ResetButton extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        // this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }

    render() {
        return (

            <button onClick={() => this.handleSubmit()}>
                <p>
                    I am a button. Click me to reset.
                </p>
            </button>
        )
    }
}