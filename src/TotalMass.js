import React from 'react'

function TotalMass(props) {

    const getTotalMass = (ingredientData) => {
        let total = 0
        ingredientData.forEach(ingredient => {
            if (ingredient.id !== 1) {
                total += ingredient.amount
            }
        });
        return total
    };

    return (
        <div class='totalMass'>
            Total mass: {getTotalMass(props.ingredientData)} grams
        </div>
    )
}

export default TotalMass