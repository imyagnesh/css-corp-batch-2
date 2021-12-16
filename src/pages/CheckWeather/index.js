import React, { Component, createRef } from 'react';

import './checkWeatherStyle.css';


export default class CheckWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDetails: [],
            isFound: false,
            resCity: "",
            resTemp: "",
            errText: ""


        }
        this.inputText = createRef();

    }

    async componentDidMount() {
        this.loadData();
    }


    loadData = async () => {
        try {
            const res = await fetch('http://localhost:3000/cityDetails');
            const json = await res.json();
            //    console.log(json);
            this.setState({
                cityDetails: json
            })
        } catch (error) {
            console.log(error)
        }
    };

    // checkWeather1 = () => {
    //     const input = this.inputText.current.value;
    //     const res = this.state.cityDetails.find((x) => x.city === input)
    //     if (res !== undefined) {
    //         this.setState({ resCity: res.city, resTemp: res.temp, isFound: true })
    //     }
    //     else {
    //         this.setState({ isFound: false, errText: "City not found" })
    //     }
    // }

    checkWeather = async () => {
        const input = this.inputText.current.value;

        try {
            const res = await fetch(`http://localhost:3000/cityDetails?city=${input}`, {
                method: 'GET',
            });

            const json = await res.json();
            console.log(json);
            if (json.length !== 0) {
                json.map((x) => {
                    this.setState({ resCity: x.city, resTemp: x.temp, isFound: true })
                })
            } else {
                this.setState({ isFound: false, errText: "City not found" })
            }

        } catch (error) {
            console.log(error);
        }

    };


    render() {
        const { resCity, errText, resTemp, isFound } = this.state
        return (
            <div>
                <h1 className="text my-2 text-lg font-bold">Check Weather App</h1>

                <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter city"
                    ref={this.inputText} />

                <button type="submit" className="btn-primary" onClick={this.checkWeather}>
                    Check
                </button>
                {
                    isFound ?
                        <h2>City: {resCity} , Temperature: {resTemp} </h2> :
                        <h2>{errText}</h2>
                }
            </div>
        )

    }
}
