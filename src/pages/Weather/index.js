import React, { Component, createRef } from 'react';
import './Weather.css';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CityList: [
                { name: 'dindigul', Temp: '30 Degree' },
                { name: 'chennai', Temp: '36 Degree' },
                { name: 'madurai', Temp: '37 Degree' },
                { name: 'trichy', Temp: '32 Degree' },
                { name: 'coimbatore', Temp: '32 Degree' }
            ],
            resultText: ' ',
        }
        this.inputText = createRef();
    }
    searchCity = (name) => {
        this.setState(() => {
            const result = this.state.CityList.find((item) => name === item.name);
            return {
                resultText: (result) ? `The ${result.name} Weather Status is :  ${result.Temp}` : `Sorry! ${name} city is not in the Record`
            }
        });
    };
    findWeather = (event) => {
        event.preventDefault();
        let enteredCity = this.inputText.current.value;
        this.searchCity(enteredCity.toLowerCase());
    };
    render() {
        return (
            <div className="w-full h-full absolute bg-slate-400 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-10 bg-white rounded-md shadow-xl">
                    <h1 className="flex justify-center text-center my-2 text-lg font-bold">Weather Forecast App</h1>
                    <form className="flex justify-center my-2" onSubmit={this.findWeather}>
                        <input type="text" className="input" placeholder="Enter the city Name " ref={this.inputText} />
                        <button type="submit" className=" mx-2 btn-primary">
                            Submit
                        </button>
                    </form>
                    <span className='text-center'> {this.state.resultText}</span>
                </div>
            </div>
        );
    }
}
