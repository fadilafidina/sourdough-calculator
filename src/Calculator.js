import React, { useState } from 'react';
import Ingredient from './Ingredient'
import ResetButton from './ResetButton';
import IngredientData from './data/ingredientData'

const ratios = {
    totalFlour: 1,
    breadFlour: 0.8,
    wwFlour: 0.2,
    levain: 0.2,
    water: 0.7,
    salt: 0.02,
};

function Calculator() {
    const [ingredientData, setIngredientsData] = useState(IngredientData)

    const handleChange = ((event, id) => {
        const { name, value } = event.target;
        console.log(`name: ${name}, value: ${value}, event: ${event.target}`)

        const ingredientAmountChanged = value;
        const updatedIngredients = ingredientData.map(i => {

            // new amount =  amount changed for ingredient changed / ratio of ingredient changed  * the actual ingredient ur trying to calculate
            i.amount = ingredientAmountChanged / ratios[name] * i.ratio;
            return i;
        });
        setIngredientsData(updatedIngredients);
    });

    const handleChangeRatio = ((event, id) => {
        const { name, value } = event.target;
        console.log(`name: ${name}, value: ${value}, event: ${event.target}`)
        let ratioChanged;
        const updatedIngredients = ingredientData.map(i => {
            if (i.id === id) {
                ratioChanged = value / 100;
                i.ratio = ratioChanged;
                // new amount = totalFlour * new ratio!
                i.amount = ingredientData.ingredientData[0].amount * ratioChanged;

                console.log('ratioChanged', ratioChanged)
                console.log('i.amount', i.amount)
                console.log('i.ratio', i.ratio)
                return i;
            }
            return i;
        });

        setIngredientsData(updatedIngredients);
    });

    const handleSubmit = (() => {
        setIngredientsData(IngredientData);
    });

    const getTotalMass = () => {
        let total = 0;
        ingredientData.forEach(ingredient => {
            if (ingredient.id !== 1) {
                total += ingredient.amount
            }
        });
        return total;
    };

    const ingredientComponents = ingredientData.map(i =>
        <Ingredient
            id={i.id}
            amount={i.amount}
            label={i.label}
            ratio={i.ratio}
            text={i.text}
            handleChange={handleChange}
            handleChangeRatio={handleChangeRatio}
        >
        </Ingredient>
    );

    return (
        <div>
            <form class="body">
                {ingredientComponents}
                        Total mass: {getTotalMass()}
                <br />
                <ResetButton handleSubmit={handleSubmit}></ResetButton>
            </form>
        </div >
    )
}

export default Calculator;