import React, { Component, createRef } from 'react';
import "./weatherReport.css";

export default class WeatherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityTemperature: {},
            defaultText: "Please enter a city name to get its weather condition",
            cityDetails: [
                {id:1, city:'chennai', temperature:'37d'},
                {id:2, city:'coimbatore', temperature:'15d'},
                {id:3, city:'erode', temperature:'24d'},
                {id:4, city:'salem', temperature:'45d'},
                {id:5, city:'pollachi', temperature:'31d'}
            ]
        };
        this.inputRef = createRef();
    }

    getWheatherDetails = (event) => {
        event.preventDefault();
        const getCityName = this.inputRef.current.value.toLowerCase();
        const getCityDetails = this.state.cityDetails.find((x) => (x.city === getCityName));
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