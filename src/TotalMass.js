import React from 'react';

function TotalMass(props) {

    const gramsInALoaf = 600;
    const getTotalMass = (ingredientData) => {
        let total = 0
        ingredientData.forEach(ingredient => {
            if (ingredient.id !== 1) {
                total += ingredient.amount
            }
        });
        return total
    };

    const getNumberOfLoaves = (ingredientData) => {
        const totalMass = getTotalMass(ingredientData);
        const numberOfLoaves = Math.round(totalMass / gramsInALoaf);
        return numberOfLoaves;
    }

    return (
        <div className='totalMass'>
            <p>
                Total mass: {getTotalMass(props.ingredientData)} grams
            </p>
            <p>
                Makes around {getNumberOfLoaves(props.ingredientData)} {gramsInALoaf} gram loaves.
            </p>
        </div>
    );
}

export default TotalMass;