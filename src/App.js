import React, { Component } from 'react';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            dietaryRequirements: {
                isHalal: false,
                isVegetarian: false,
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDietStrings = this.getDietStrings.bind(this);
    }

    handleChange(event) {

        const { name, type, value, checked } = event.target;

        console.log(`name: ${name}, value: ${value}`)

        // this.setState({
        //     [name]: value
        // });

        type === 'checkbox'
            ? this.setState({
                dietaryRequirements: {
                    [name]: checked
                }
            })
            : this.setState({
                [name]: value
            });

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



    render() {

        return (
            <div>
                <form>
                    <input
                        name='firstName'
                        value={this.state.firstName}
                        type='text'
                        placeholder='First Name'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    <input
                        name='lastName'
                        value={this.state.lastName}
                        type='text'
                        placeholder='Last Name'
                        onChange={this.handleChange}>
                    </input>
                    <br />

                    <input
                        name='age'
                        value={this.state.age}
                        type='number'
                        placeholder='Age'
                        onChange={this.handleChange}>
                    </input>
                    <br />

                    <label>
                        <input
                            name='gender'
                            type='radio'
                            value='female'
                            // checked={this.state.value === 'female'}
                            onChange={this.handleChange}>
                        </input>
                        Female
                    </label>
                    <br />

                    <label>
                        <input
                            name='gender'
                            type='radio'
                            value='male'
                            // checked={this.state.value === 'male'}
                            onChange={this.handleChange}>
                        </input>
                        Male
                    </label>

                    <br />


                    {/* // value is what the value of the state should be if it is chosen */}
                    <select
                        name='location'
                        onChange={this.handleChange}>
                        <option value=''>Please choose an option</option>
                        <option value='kyoto'>Kyoto</option>
                        <option value='osaka'>Osaka</option>
                        <option value='london'>London</option>
                        <option value='new york'>New York</option>
                    </select>

                    <br />
                    <h2>Dietary requirements</h2>

                    <br />
                    <label>
                        <input
                            name='isHalal'
                            type='checkbox'
                            checked={this.state.dietaryRequirements.isHalal}
                            onChange={this.handleChange}>
                        </input>
                        Halal
                    </label>

                    <br />

                    <label>
                        <input
                            name='isVegetarian'
                            type='checkbox'
                            checked={this.state.dietaryRequirements.isVegetarian}
                            onChange={this.handleChange}>
                        </input>
                        Vegetarian
                    </label>





                    <button onClick={this.handleSubmit}>Submit</button>
                </form>

                <hr></hr>

                <h1>
                    Your details
                </h1>
                <p>
                    First name: {this.state.firstName}
                </p>
                <p>
                    Last name: {this.state.lastName}
                </p>
                <p>
                    Age: {this.state.age}
                </p>

                <p>
                    Gender: {this.state.gender}
                </p>

                <p>
                    Location: {this.state.location}
                </p>

                <p>
                    Dietary Requirements: {this.getDietStrings()}
                </p>
            </div>
        )
    }
}
export default App;
