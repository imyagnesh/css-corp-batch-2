import React, { Component, createRef } from 'react';
import "./weatherReport.css";

export default class WeatherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityTemperature: {},
            defaultText: "Please enter a city name to get its weather condition",
            cityDetails: []
        };
        this.inputRef = createRef();
    }

    async componentDidMount() {
        this.loadCityDetails();
    }

    loadCityDetails = async() => {
        try {
            const res = await fetch('http://localhost:3000/city-details');
            const json = await res.json();
            this.setState({
                cityDetails: json
            });

        } catch (error) {
            console.error(error);
        }
    }

    getWheatherDetails = (event) => {
        event.preventDefault();
        const getCityName = this.inputRef.current.value;
        const getCityDetails = this.state.cityDetails.find((x) => (x.city.toLowerCase() === getCityName.toLowerCase()));
        this.setState({
            cityTemperature: getCityDetails,
            defaultText: !getCityDetails ? "No Record Found" : ""
        }, () => {
            this.inputRef.current.value = '';
        });
    }
    
    render () {
        const { cityTemperature, defaultText} = this.state
        return (
            <div className='h-screen flex flex-col'>
                <h1 className='text-center my-4 text-lg font-bold'>Check wheather</h1>
                <form className="flex justify-center my-2">
                    <input type="text" className="input" ref={this.inputRef} />
                    <button type="submit" onClick={this.getWheatherDetails} className="btn-primary mx-5">Check Wheather</button>
                </form>
                <div className='my-5'>
                    {
                        (cityTemperature !== undefined && Object.keys(cityTemperature).length !== 0)
                        ? <p className='text-center'>{cityTemperature.city} has a temperature of {cityTemperature.temperature}</p>
                        : <p className='text-center'>{defaultText}</p>
                    }
                </div>
            </div>
        )
    }
}