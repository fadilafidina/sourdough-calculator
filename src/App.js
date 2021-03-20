import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ingredientData from './data/ingredientData';
import Header from './Header'
import Calculator from './Calculator';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            ingredientData: ingredientData,
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleChangeRatio = this.handleChangeRatio.bind(this);
        // this.handleChangeTwo = this.handleChangeTwo.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.getTotalMass = this.getTotalMass.bind(this);
    }

    handleChangeTwo(id) {
        console.log('it got passed thru ', id);
    }



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
        return (
            <Container>
                <Header />
                <Calculator />
            </Container>
        );
    }
}
export default App;
