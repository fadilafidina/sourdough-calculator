import React from 'react';

export default function ResetButton(props) {
    const {
        handleSubmit
    } = props;

    return (
        <div>
            <button onClick={(e) => handleSubmit(e)}>
                Reset data
            </button>
        </div>
    );
}
