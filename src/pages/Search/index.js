import React, { Component, createRef } from 'react';
import './todoStyle.css';

const test = () => { };
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDetail: '',
            cityData: null,
            temperature: 'degree celsius',
            noData: 'not found'
        };
        this.inputText = createRef();
    }

    checkCity = async (event) => {
        try {
            event.preventDefault();
            const todoText = this.inputText.current.value;
            const res = await fetch(`http://localhost:3000/weather-info?city=${todoText}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const json = await res.json();
            this.setState(
                ({ cityData }) => {
                    return {
                        cityData: json[0] || todoText,
                    };
                },
                () => {
                    this.inputText.current.value = '';
                },
            );
        } catch (error) { }

    };

    render() {
        const { cityData, temperature, noData } = this.state;
        return (
            <div className="bg-[#FAFAFA] h-screen flex flex-col">
                <h1 className="text-center my-2 text-lg font-bold">Search App</h1>
                <form className="flex justify-center my-2" onSubmit={this.checkCity}>
                    <input type="text" className="input" ref={this.inputText} />
                    <button type="submit" className="btn-primary">
                        Check Temp
                    </button>
                </form>
                <div className="flex-1 overflow-auto">
                    {(cityData !== null) && (cityData.city ?
                        <div className="text-green-900">{cityData.city} {temperature} = {cityData.temp} °C</div>
                        : <div className="text-red-900">{cityData} {noData}</div>)}
                </div>
            </div>
        );
    }
}
