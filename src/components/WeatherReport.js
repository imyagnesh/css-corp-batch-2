import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { WeatherConsumer } from '../context/weatherContext';

class WeatherReport extends PureComponent {
    render() {
        return (



            <div className="pt-3 w-11/12">
                <div className="flex w-full text-left pl-4">
                    <div className="w-1/2">
                        <div className="font-bold">BENGALURU</div>
                        <div className="font-normal">SCATTERED CLOUDS | FEELS LIKE 30 c</div>
                    </div>
                    <div className="w-1/2 text-right">
                        Image
                                </div>
                </div>
                <div className="flex ml-8">
                    <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                        <div className="text-white">CURRENT TEMPERATURE</div>
                        <span className="text-white">29 C</span>
                    </div>
                    <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                        <div className="text-white">CURRENT TEMPERATURE</div>
                        <span className="text-white">29 C</span>
                    </div>
                    <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
                        <div className="text-white">CURRENT TEMPERATURE</div>
                        <span className="text-white">29 C</span>
                    </div>
                </div>
                <div className="flex pt-5 ml-8">
                    <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
                        <div className="text-white">WIND SPEED</div>
                        <span className="text-white">3.1 meter/sec</span>
                    </div>
                    <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
                        <div className="text-white">WIND DIRECTION</div>
                        <span className="text-white">220 degrees</span>
                    </div>
                </div>
                <div className="flex pt-5 pb-5 ml-8">
                    <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
                        <div className="text-white">PRESSURE</div>
                        <span className="text-white">1016 hpa</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
                        <div className="text-white">HUMIDITY</div>
                        <span className="text-white">54 %</span>
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