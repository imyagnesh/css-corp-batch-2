import React, { Component, createRef } from 'react';

import './WeatherStyle.css';


export default class CheckWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDetails: [
                {
                    id: 1,
                    city: "Chennai",
                    temp: 31
                },
                {
                    id: 2,
                    city: "Bangalore",
                    temp: 25
                },
                {
                    id: 3,
                    city: "Delhi",
                    temp: 20
                },
            ],
            isFound: false,
            resCity: "",
            resTemp: "",
            errText: ""


        }

        this.inputText = createRef();

    }

    checkWeather = () => {
        const input = this.inputText.current.value;
        const res = this.state.cityDetails.find((x) => x.city === input)
        //console.log(res)
        // console.log(res.city, res.temp)
        if (res !== undefined) {
            this.setState({ resCity: res.city, resTemp: res.temp, isFound: true })
        }
        else {
            this.setState({ isFound: false, errText: "City not found" })
        }
    }


    render() {

        return (
            <div>
                <h1 className="text my-2 text-lg font-bold">Check Weather App</h1>

                <input type="text" className="input" class="placeholder-gray-500 placeholder-opacity-100 ..." placeholder="Enter city" ref={this.inputText} />
                <button type="submit" className="btn-primary" onClick={this.checkWeather}>
                    Check
                </button>
                {
                    this.state.isFound ?
                        <h2>City: {this.state.resCity} , Temperature: {this.state.resTemp} </h2> :
                        <h2>{this.state.errText}</h2>
                }
            </div>
        )

    }
}
