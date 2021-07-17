import React from 'react';

export default function ResetButton(props) {
    return (
        <div class='resetButton'>
            <button onClick={() => this.props.handleSubmit()}>
                <p class="buttonText">
                    Reset data
            </p>
            </button>
        </div>
    );
}
