import React from 'react';

export default function ResetButton(props) {
    return (
        <div className='resetButton'>
            <button onClick={() => this.props.handleSubmit()}>
                <p className="buttonText">
                    Reset data
                </p>
            </button>
        </div>
    );
}
