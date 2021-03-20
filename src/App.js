import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ingredientData from './data/ingredientData';
import Ingredient from './Ingredient'
import ResetButton from './ResetButton'
import Header from './Header'

const ratios = {
    totalFlour: 1,
    breadFlour: 0.8,
    wwFlour: 0.2,
    levain: 0.2,
    water: 0.7,
    salt: 0.02,
};

export class App extends Component {
    constructor() {
        super();
        this.state = {
            ingredientData: ingredientData,
            // ratios: {
            //     totalFlour: 1,
            //     breadFlour: 0.8,
            //     wwFlour: 0.2,
            //     levain: 0.2,
            //     water: 0.7,
            //     salt: 0.02,
            // }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRatio = this.handleChangeRatio.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTotalMass = this.getTotalMass.bind(this);
    }

    handleChangeTwo(id) {
        console.log('it got passed thru ', id);
    }

    handleChange(event, id) {
        const { name, value } = event.target;
        // const { name, type, value, checked } = event.target;

        // name = name of the ingredient changed
        // value = the amount
        console.log(`name: ${name}, value: ${value}, event: ${event.target}`)

        const ingredientAmountChanged = value;


        this.setState(prevState => {
            //make new array first
            const updatedIngredients = prevState.ingredientData.map(i => {

                // new amount =  amount changed for ingredient changed / ratio of ingredient changed  * the actual ingredient ur trying to calculate
                i.amount = ingredientAmountChanged / ratios[name] * i.ratio;
                return i;
            });

            // set the new state to the new ingredients with the updated state
            return {
                ingredientData: updatedIngredients,
            }
        })
        console.log("Changed", id);
        console.log(this.state);
    };

    handleChangeRatio(event, id) {
        const { name, value } = event.target;
        // const { name, type, value, checked } = event.target;

        // name = name of the ingredient changed
        // value = the amount
        console.log(`name: ${name}, value: ${value}, event: ${event.target}`)
        let ratioChanged;


        this.setState(prevState => {
            //make new array first
            const updatedIngredients = prevState.ingredientData.map(i => {
                if (i.id === id) {
                    ratioChanged = value / 100;
                    i.ratio = ratioChanged;
                    // new amount = totalFlour * new ratio!
                    i.amount = prevState.ingredientData[0].amount * ratioChanged;

                    console.log('ratioChanged', ratioChanged)
                    console.log('i.amount', i.amount)
                    console.log('i.ratio', i.ratio)
                    return i;
                }
                return i;
            });

            return {
                ingredientData: updatedIngredients,
            }
        })
        console.log("Changed", id);
        console.log(this.state);
    };

    handleSubmit() {
        this.setState({})
    };

    getTotalMass() {
        let total = 0;
        this.state.ingredientData.forEach(ingredient => {
            if (ingredient.id !== 1) {
                total += ingredient.amount
            }
        });
        return total;
    }

    render() {
        const ingredientComponents = this.state.ingredientData.map(i =>
            <Ingredient
                id={i.id}
                amount={i.amount}
                label={i.label}
                ratio={i.ratio}
                text={i.text}
                handleChange={this.handleChange}
                handleChangeRatio={this.handleChangeRatio}
            >
            </Ingredient>
        );

        return (
            <Container>
                <Header />
                <div>
                    <form class="body">

                        {ingredientComponents}
                        Total mass: {this.getTotalMass()}
                        <br />
                        <ResetButton handleSubmit={this.handleSubmit}></ResetButton>
                    </form>
                </div >
            </Container>
        );
    }
}
export default App;
