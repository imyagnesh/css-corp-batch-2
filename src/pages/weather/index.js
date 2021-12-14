import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './style.css';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: "",
            weatherList: [{
                id: 1,
                cityName: "Calicut",
                temp: "33°C"
            },
            {
                id: 2,
                cityName: "Mumbai",
                temp: "31°C"
            },
            {
                id: 3,
                cityName: "Bangalore",
                temp: "29°C"
            },
            {
                id: 4,
                cityName: "Kolkatta",
                temp: "25°C"
            },
            {
                id: 5,
                cityName: "Pune",
                temp: "39°C"
            },
            {
                id: 6,
                cityName: "Jammu",
                temp: "15°C"
            }
            ]
        };
        this.inputText = createRef();
    }

    checkWeather = (event) => {
        event.preventDefault();
        const cityName = this.inputText.current.value;
        const availableCity = this.state.weatherList.find(x => x.cityName.toLowerCase() === cityName.toLowerCase());
        this.setState(({ weatherList, report }) => ({
            weatherList,
            report: availableCity ? `Temperature in ${cityName} is ${availableCity.temp}` : 'No data available',
        })
        )
    }
    render() {
        const { weatherList, report } = this.state;
        return (<div className="bg-[#FAFAFA] h-screen flex flex-col">
            <h1 className="text-center my-2 text-lg font-bold">Weather Report</h1>
            <form className="flex justify-center my-2" onSubmit={this.checkWeather}>
                <input type="text" className="form-input" ref={this.inputText} />
                <button type="submit" className="btn-primary">
                    Check
                </button>
            </form>
            <p className='text-center'>{report}</p>
        </div >)
    }
}