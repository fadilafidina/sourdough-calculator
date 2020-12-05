import React, { Component } from 'react';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            totalFlour: '',
            breadFlour: '',
            wwFlour: '',
            levain: '',
            water: '',
            salt: '',
            ratios: {
                totalFlour: 1,
                breadFlour: 0.8,
                wwFlour: 0.2,
                levain: 0.2,
                water: 0.7,
                salt: 0.02,
            },
            dietaryRequirements: {
                isHalal: false,
                isVegetarian: false,
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDietStrings = this.getDietStrings.bind(this);
        this.getTotalMass = this.getTotalMass.bind(this);
    }

    handleChange(event) {

        const { name, type, value, checked } = event.target;

        console.log(`name: ${name}, value: ${value}`)
        name === 'totalFlour'
            ? this.setState({
                totalFlour: value,
                breadFlour: value / this.state.ratios[name] * this.state.ratios.breadFlour,
                wwFlour: value / this.state.ratios[name] * this.state.ratios.wwFlour,
                levain: value / this.state.ratios[name] * this.state.ratios.levain,
                water: value / this.state.ratios[name] * this.state.ratios.water,
                salt: value / this.state.ratios[name] * this.state.ratios.salt,
            })
            : name === 'breadFlour'
                ? this.setState({
                    totalFlour: value / this.state.ratios.breadFlour * this.state.ratios.totalFlour,
                    breadFlour: value,
                    wwFlour: value / this.state.ratios.breadFlour * this.state.ratios.wwFlour,
                    levain: value / this.state.ratios.breadFlour * this.state.ratios.levain,
                    water: value / this.state.ratios.breadFlour * this.state.ratios.water,
                    salt: value / this.state.ratios.breadFlour * this.state.ratios.salt,

                })
                : name === 'wwFlour'
                    ? this.setState({
                        // [name]: value,
                        // [name]: this.state.totalFlour * this.state.ratios[name],
                        totalFlour: value,
                        breadFlour: value * 0.8,
                        wwFlour: value * 0.2,
                        levain: value * 0.2,
                        water: value * 0.7,
                        salt: value * 0.02,
                    }) : console.log(this.state);
        console.log(this.state);
    };

    handleSubmit(event) {
        alert(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Age: ${this.state.age}
        Gender: ${this.state.gender}
        Dietary requirements: ${this.getDietStrings()}
        `)
    };

    getDietStrings() {

        let dietStrings = [];

        const halalString = 'Halal';
        const vegetarianString = 'Vegetarian';

        if (this.state.dietaryRequirements.isHalal) {
            dietStrings.push(halalString)
        }
        if (this.state.dietaryRequirements.isVegetarian) {
            dietStrings.push(vegetarianString)
        }

        return dietStrings;

    }

    getTotalMass() {
        let total = +this.state.totalFlour +
            +this.state.levain +
            +this.state.salt +
            +this.state.water;
        return total || 0;
    }

    render() {
        return (
            <div>
                <form>
                    Total flour:
                    <input
                        name='totalFlour'
                        value={this.state.totalFlour === 0 ? '' : this.state.totalFlour}
                        type='text'
                        placeholder='Total Flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Bread flour:
                    <input
                        name='breadFlour'
                        value={this.state.breadFlour === 0 ? '' : this.state.breadFlour}
                        type='text'
                        placeholder='Bread Flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    WW flour:
                    <input
                        name='wwFlour'
                        value={this.state.wwFlour === 0 ? '' : this.state.wwFlour}
                        type='text'
                        placeholder='Whole wheat flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Levain:
                    <input
                        name='levain'
                        value={this.state.levain === 0 ? '' : this.state.levain}
                        type='text'
                        placeholder='Levain'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Salt:
                    <input
                        name='salt'
                        value={this.state.salt === 0 ? '' : this.state.salt}
                        type='text'
                        placeholder='Salt'
                        onChange={this.handleChange}>
                    </input>
                    <br />

                    Total mass: {this.getTotalMass()}
                    <br />
                </form>

                <hr></hr>
            </div>
        )
    }
}
export default App;
