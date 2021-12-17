import React, { Component, createRef } from 'react';


export default class WeatherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: [],
            selectedCity: '',
        };

        this.inputText = createRef();
    }


    inputRef = createRef();

    async componentDidMount() {
        this.loadWeather();
    }

    loadWeather = async () => {
        try {
            let url = 'http://localhost:3000/weather-report';
            const res = await fetch(url);
            const json = await res.json();
            this.setState({
                weatherList: json,
            });
        } catch (error) {
            console.error(error);
        }
    }
    checkWeather = async (event) => {
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
            <div className="bg-[#FAFAFA] h-screen flex flex-col">
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