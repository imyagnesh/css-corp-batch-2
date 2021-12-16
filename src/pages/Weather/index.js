import React, { Component, createRef } from 'react';

export default class WeatherReport extends Component {
    state = {
        weatherList: [
            { id: 1, city: 'Namakkal', celcius: 35 },
            { id: 2, city: 'Chennai', celcius: 45 }],
        selectedCity: '',
    };

    inputRef = createRef();

    checkWeather = (event) => {
        event.preventDefault();
        const cityVal = this.inputRef.current.value;
        const city = cityVal.charAt(0).toUpperCase() + cityVal.slice(1);
        this.setState({
            selectedCity: city,
        },
            () => {
                this.inputRef.current.value = '';
            },
        );
    };

    render() {
        const { weatherList, selectedCity } = this.state;
        var result = weatherList.filter((x) => x.city === selectedCity);
        var cityWeather = (selectedCity != '') ? <div className="text-red-900">The {selectedCity} City Record Not Found</div> : '';

        if (result.length > 0) {
            cityWeather = weatherList
                .filter((x) => x.city === selectedCity)
                .map((item) => (
                    <div className="text-green-900" key={item.city}> {item.city} : {item.celcius}</div>
                ))
        }

        return (
            <div className="bg-[#FAFAFA] h-screen flex flex-col h-1/2 w-1/2 justify-center items-center m-auto border-solid border-r-blue-100">
                <h2 className="text-center my-2 text-lg font-bold">Weather Report App</h2>
                <form className="flex justify-center my-2" onSubmit={this.checkWeather}>
                    <input type="text" className="input my-4 capitalize" ref={this.inputRef} />
                    <button type="submit" className="btn-primary my-4">Check Weather</button>
                </form>
                <div className="text-center my-2 text-lg font-bold">
                    {cityWeather}
                </div>
            </div>
        )
    }
}