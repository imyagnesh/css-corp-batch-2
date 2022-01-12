import React from 'react';


class Weather extends React.Component {

    constructor(props) {
        super(props)
    }

    celcius = (kelvin) => {
        const celcius = Math.round(5 / 9 * (kelvin - 32));
        return celcius;
    }


    fahreinheit = (kelvin) => {
        return kelvin;
    }

    render() {
        return (

            <div className="border-gray-100 rounded border bg-white p-4 mt-2">
                <div className="flex mb-5">
                    <div className="w-2/3">
                        <h3 className="font-semibold text-2xl">{this.props.weatherResult.name}</h3>
                        <p className="uppercase text-xs font-semibold text-gray-600">{this.props.weatherResult.weather[0].description} | Feels like {this.celcius(this.props.weatherResult.main.feels_like)}&deg;C</p>
                    </div>
                    <div className="w-1/3 text-right">
                        <img src="https://i.ibb.co/Z1qZrBH/New-Project-30.png" className="inline-block	" />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3 mb-2">
                        <div className="text-center p-3 bg-gradient-to-b from-purple-500 to-red-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white">Current Temperature</p>
                            <h5 className="text-md font-semibold text-white">{this.celcius(this.props.weatherResult.main.temp)}&deg;C</h5>
                        </div>
                    </div>
                    <div className="w-1/3 mb-2 mx-1">
                        <div className="text-center p-3 bg-gradient-to-b from-purple-500 to-red-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white">Maximum Temperatures</p>
                            <h5 className="text-md font-semibold text-white">{this.celcius(this.props.weatherResult.main.temp_max)}&deg;C</h5>
                        </div>
                    </div>
                    <div className="w-1/3 mb-2">
                        <div className="text-center p-3 bg-gradient-to-b from-purple-500 to-red-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white">Minimum Temperature</p>
                            <h5 className="text-md font-semibold text-white">{this.celcius(this.props.weatherResult.main.temp_min)}&deg;C</h5>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 mb-2 mr-1">
                        <div className="text-center p-3 bg-gradient-to-r from-pink-700 to-pink-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white mb-3">Wind Speed</p>
                            <h5 className="text-md font-semibold text-white">{this.props.weatherResult.wind.speed} meter/sec</h5>
                        </div>
                    </div>
                    <div className="w-1/2 mb-2">
                        <div className="text-center p-3 bg-gradient-to-r from-pink-700 to-pink-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white mb-3">Wind Direction</p>
                            <h5 className="text-md font-semibold text-white">{this.props.weatherResult.wind.deg}deg</h5>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 mb-2 mr-1">
                        <div className="text-center p-3 bg-gradient-to-l from-blue-700 to-blue-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white mb-3">Pressure</p>
                            <h5 className="text-md font-semibold text-white">{this.celcius(this.props.weatherResult.main.pressure)} hpa</h5>
                        </div>
                    </div>
                    <div className="w-1/2 mb-2">
                        <div className="text-center p-3 bg-gradient-to-l from-blue-700 to-blue-500 rounded">
                            <p className="uppercase text-xs font-semibold text-white mb-3">Humidity</p>
                            <h5 className="text-md font-semibold text-white">{this.props.weatherResult.main.humidity}%</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;