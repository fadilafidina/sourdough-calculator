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
                    Reset data
                </p>
            </button>
        )
    }
}