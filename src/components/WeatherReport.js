import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { WeatherConsumer } from '../context/weatherContext';

class WeatherReport extends PureComponent {
    constructor(props) {
        super(props);

    }
    render() {
        const weatherResult = this.props.weatherResult;
        console.log("weatherResult");
        console.log(weatherResult);
        return weatherResult['error'] ? (<h1 className="text-center text-red-400">No matching location</h1>) :
            (
                <div className="pt-3 w-11/12">
                    <div className="flex w-full text-left pl-4">
                        <div className="w-1/2">
                            <div className="font-bold">{weatherResult.location.name}</div>
                            <div className="font-normal">{weatherResult.current.condition.text} | {weatherResult.current.feelslike_c} c</div>
                        </div>
                        <div className="w-1/2 text-right">
                            <img className="float-right" src={weatherResult.current.condition.icon} />
                        </div>
                    </div>
                    <div className="flex ml-8">
                        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                            <div className="text-white">CURRENT TEMPERATURE</div>
                            <span className="text-white">{weatherResult.current.temp_c} C</span>
                        </div>
                        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                            <div className="text-white">MAXIMUM TEMPERATURE</div>
                            <span className="text-white">{weatherResult.forecast.forecastday[0].day.maxtemp_c} C</span>
                        </div>
                        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                            <div className="text-white">MINIMUM TEMPERATURE</div>
                            <span className="text-white">{weatherResult.forecast.forecastday[0].day.mintemp_c} C</span>
                        </div>
                    </div>
                    <div className="flex pt-5 ml-8">
                        <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
                            <div className="text-white">WIND SPEED</div>
                            <span className="text-white">{weatherResult.current.wind_mph} kph</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
                            <div className="text-white">WIND DIRECTION</div>
                            <span className="text-white">{weatherResult.current.wind_degree} degrees</span>
                        </div>
                    </div>
                    <div className="flex pt-5 pb-5 ml-8">
                        <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
                            <div className="text-white">PRESSURE</div>
                            <span className="text-white">{weatherResult.current.pressure_mb} hpa</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
                            <div className="text-white">HUMIDITY</div>
                            <span className="text-white">{weatherResult.current.humidity} %</span>
                        </div>
                    </div>
                </div>



            );
    }
}
/*
WeatherReport.propTypes = {
    weatherResult: PropTypes.shape({
        PropTypes.string
    }),
    httpStatus: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.objectOf(Error),
        status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    }),
};
*/

export default WeatherReport;