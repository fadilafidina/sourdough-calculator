import React from 'react';

export default function Ingredient(props) {
    const ratioToDisplay = props.ratio === 0 ? '' : props.ratio * 100;

    return (
        <div class="pair">
            <div class="left">
                <div class="label">
                    {props.label}
                </div>
                <input
                    name={props.text}
                    value={ratioToDisplay}
                    type='text'
                    placeholder={`Ratio of ${props.label}`} // no place holder
                    onChange={(e) => props.handleChangeRatio(e, props.id)}>
                </input> %
                </div >

            <div class="right">
                Amount:
                    <input
                    name={props.text}
                    value={props.amount === 0 ? '' : props.amount}
                    type='text'
                    placeholder={props.label}
                    onChange={(e) => props.handleChange(e, props.id)}>
                </input> grams
                </div>
        </div >
    )
}
