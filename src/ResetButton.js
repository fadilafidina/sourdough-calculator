import React from 'react';

export default function ResetButton(props) {
    const {
        handleSubmit
    } = props;

    return (
        <div>
            <button onClick={handleSubmit}>
                Reset data
            </button>
        </div>
    );
}
