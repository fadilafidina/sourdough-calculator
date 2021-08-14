import React, { useState, useEffect } from 'react';
import Ingredient from './Ingredient'
import ResetButton from './ResetButton';
import initialIngredientData from './data/ingredientData'
import TotalMass from './TotalMass'

const ratios = {
    totalFlour: 1,
    breadFlour: 0.8,
    wwFlour: 0.2,
    levain: 0.2,
    water: 0.7,
    salt: 0.02,
};

function Calculator() {
    const [ingredientData, setIngredientsData] = useState(initialIngredientData);
    const [hasReset, setHasReset] = useState(false);

    // we want this pop up to pop up when we click reset just to practice using hooks :)
    useEffect(() => {
        if (hasReset) {
            window.alert('COOL! now go get making bread! :D');
            setIngredientsData(initialIngredientData); // resets it to the original
            setHasReset(false);
        }
    }, [hasReset]);

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
                i.amount = ingredientData[0].amount * ratioChanged;
                return i;
            }
            return i;
        });

        setIngredientsData(updatedIngredients);
    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        setIngredientsData(initialIngredientData); // resets it to the original
        setHasReset(true);
    });

    const ingredientComponents = ingredientData.map(i =>
        <Ingredient
            key={i.id}
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
            <form className='body'>
                {ingredientComponents}

                <TotalMass ingredientData={ingredientData}></TotalMass>

                <br />

                <div className='wrapper'>
                    <ResetButton handleSubmit={handleSubmit}></ResetButton>
                    <DownloadButton dataToDownload={ingredientData} ></DownloadButton>
                </div>
            </form>
        </div >
    );
}

const DownloadButton = (props) => {
    const {
        dataToDownload
    } = props;

    const handleDownload = (e) => {
        e.preventDefault();
        const csvFile = convertToCsv(dataToDownload);
        const fileName = 'Ingredients.csv';

        const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName);
        } else {
            const link = document.createElement('a');
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

    const convertToCsv = (items) => {
        const replacer = (_, value) => value === null ? '' : value
        const headers = Object.keys(items[0]);
        const csv = [
            headers.join(','),
            ...items.map(item => headers.map(fieldName => JSON.stringify(item[fieldName], replacer)).join(','))
        ].join('\n');
        console.log(csv);
        return csv;
    }

    return (
        <div>
            <button onClick={(e) => handleDownload(e)}>
                Download csv
            </button>
        </div>
    )
}

export default Calculator;