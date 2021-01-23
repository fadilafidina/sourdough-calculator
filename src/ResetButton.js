import React from 'react';

export default class ResetButton extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (

            <button onClick={() => this.props.handleSubmit()}>
                <p>
                    I am a button. Click me to reset.
                </p>
            </button>
        )
    }
}