import React, { Component } from 'react';
import ingredientData from './data/ingredientData';
import Ingredient from './Ingredient'
import ResetButton from './ResetButton'

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
            // totalFlour: '',
            // breadFlour: '',
            // wwFlour: '',
            // levain: '',
            // water: '',
            // salt: '',
            ingredientData: ingredientData,
            ratios: {
                totalFlour: 1,
                breadFlour: 0.8,
                wwFlour: 0.2,
                levain: 0.2,
                water: 0.7,
                salt: 0.02,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTotalMass = this.getTotalMass.bind(this);
    }

    handleChangeTwo(id) {
        console.log('it got passed thru ', id);
    }

    // handleChange(name, value) {
    handleChange(event, id) {
        const { name, value } = event.target;
        // const { name, type, value, checked } = event.target;

        console.log(`name: ${name}, value: ${value}`)

        const ingredientAmountChanged = value;

        this.setState(prevState => {
            //make new array first
            const updatedIngredients = prevState.ingredientData.map(i => {
                // if (i.id === id) {
                //     i.amount = value / prevState.ratios['totalFlour'] * prevState.ratios[i.text]

                // }

                i.amount = ingredientAmountChanged / ratios.totalFlour * i.ratio;
                return i;
            });

            //     // set the new state to the new todos with the updated state
            return {
                ingredientData: updatedIngredients,
            }
        })
        console.log("Changed", id);
        console.log(this.state);
    };

    handleSubmit() {
        console.log("you POTATO")


        this.setState({
            totalFlour: 0,
            breadFlour: 0,
            wwFlour: 0,
            levain: 0,
            water: 0,
            salt: 0,
        })
    };

    getTotalMass() {
        let total = +this.state.totalFlour +
            +this.state.levain +
            +this.state.salt +
            +this.state.water;
        return total || 0;
    }

    render() {
        // const todoComponents = this.state.ingredients.map(
        //     todo => <ingredient amount={todo} text={todo.text} completed={todo.completed} onChange={this.handleChange} />);
        const ingredientComponents = this.state.ingredientData.map(i =>
            <Ingredient
                id={i.id}
                amount={i.amount}
                label={i.label}
                ratio={i.ratio}
                text={i.text}
                handleChange={this.handleChange}>
            </Ingredient>
        )

        // const dict = this.state.ingredientData;
        // let components = [];
        // let component;
        // for (var i in dict) {
        //     component = <Ingredient amount={dict[i].amount}
        //         text={dict[i].text}
        //         label={dict[i].label}
        //         ratio={dict[i].ratio}
        //         onChange={this.handleChange} >
        //     </Ingredient>
        //     components.push(component);
        // }

        return (
            <div>
                <form>

                    {ingredientComponents}


Below are the hardcoded boxes <br />
                    {/* 
                    Total flour:
                <input
                        name='totalFlour'
                        value={this.state.ingredientData.totalFlour.amount === 0 ? '' : this.state.ingredientData.totalFlour.amount}
                        type='text'
                        placeholder='Total Flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Bread flour:
                <input
                        name='breadFlour'
                        value={this.state.ingredientData.breadFlour.amount === 0 ? '' : this.state.ingredientData.breadFlour.amount}
                        type='text'
                        placeholder='Bread Flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    WW flour:
                <input
                        name='wwFlour'
                        value={this.state.ingredientData.wwFlour.amount === 0 ? '' : this.state.ingredientData.wwFlour.amount}
                        type='text'
                        placeholder='Whole wheat flour'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Levain:
                <input
                        name='levain'
                        value={this.state.ingredientData.levain.amount === 0 ? '' : this.state.ingredientData.levain.amount}
                        type='text'
                        placeholder='Levain'
                        onChange={this.handleChange}>
                    </input>
                    <br />
                    Salt:
                <input
                        name='salt'
                        value={this.state.ingredientData.salt.amount === 0 ? '' : this.state.ingredientData.salt.amount}
                        type='text'
                        placeholder='Salt'
                        onChange={this.handleChange}>
                    </input> */}
                    <br />

                    Total mass: {this.getTotalMass()}
                    <br />

                    <button onClick={this.handleSubmit}>
                        <p>
                            I am a button. Click me to reset.
                        </p>
                    </button>

                    <ResetButton onClick={this.handleSubmit}></ResetButton>
                </form>
            </div >
        )
    }
}
export default App;


