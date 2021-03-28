import React from 'react';

export default class ResetButton extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <div class='resetButton'>
                <button onClick={() => this.props.handleSubmit()}>
                    <p class="buttonText">
                        Reset data
                </p>
                </button>
            </div>
        );
    };
}