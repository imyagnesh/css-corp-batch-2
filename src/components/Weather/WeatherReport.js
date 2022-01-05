import React, { memo } from 'react'
import PropTypes from 'prop-types';

const WeatherReport = ({ weatherReport, reportStatus, tempOption }) => {
    const { main, wind, name, weather } = weatherReport;
    const { temp, temp_min, temp_max, feels_like, pressure, humidity } = main;
    const [icon] = weather;
    return (
        <>
            {
                weatherReport ?
                    <>
                        <div className="flex text-left bg-white mt-5">
                            <div className=' order-1 flex-grow'>
                                <h1 className=" font-bold text-xl leading-10">{name}</h1>
                                <div className="font-normal text-slate-400">SCATTERED CLOUDS | FEEL LIKE {feels_like} {tempOption} </div>
                            </div>
                            <div className=' order-2 '><img src={`http://openweathermap.org/img/wn/${icon.icon}.png`} className="bg-[#eca88e] rounded-full" /></div>
                        </div>

                        <div className='flex text-slate-50'>
                            <div className='from-orange-700  to-orange-500 bg-gradient-to-r px-5 py-5 my-5 order-1 flex-1 rounded-lg'><div>CURRENT TEMPRATURE</div> <div>{temp} {tempOption}</div></div>
                            <div className='from-orange-700  to-orange-500 bg-gradient-to-r px-5 py-5 my-5 mx-2 order-2 flex-1 rounded-lg'><div>MAXIMUM TEMPRATURE </div><div>{temp_max} {tempOption}</div></div>
                            <div className='from-orange-700  to-orange-500 bg-gradient-to-r px-5 py-5 my-5 order-3 flex-1 rounded-lg'><div>MINIMUM TEMPRATURE </div><div>{temp_min} {tempOption}</div></div>
                        </div>

                        <div className='flex text-slate-50'>
                            <div className=' from-pink-700 to-purple-500 bg-gradient-to-r px-5 py-5 my-5 flex-1 rounded-lg'><div>WIND SPEED</div><div>{wind.speed} meter /sec</div></div>
                            <div className='from-pink-700 to-pink-500 bg-gradient-to-r px-5 py-5 my-5 ml-2 flex-1 rounded-lg'><div>WIND DIRECTION</div> <div>{wind.deg} degree</div></div>
                        </div>

                        <div className='flex text-slate-50'>
                            <div className='from-blue-400 to-blue-500 bg-gradient-to-r w-full px-5 py-5 my-5 flex-1 rounded-lg'><div>PRESSURE</div> <div>{pressure} hPa</div></div>
                            <div className=' from-blue-400 to-blue-500 bg-gradient-to-r w-full block px-5 py-5 my-5 ml-2 flex-1 rounded-lg'><div>HUMIDITY</div> <div>{humidity} %</div></div>
                        </div>
                    </>
                    : ''
            }
        </>
    )
}
WeatherReport.propTypes = {
    weatherReport: PropTypes.shape(
        {
            location: PropTypes.string,
            temp: PropTypes.number,
            temp_max: PropTypes.number,
            temp_min: PropTypes.number,
            feels_like: PropTypes.number,
            wind_speed: PropTypes.number,
            wind_direction: PropTypes.string,
            pressure: PropTypes.number,
            humidity: PropTypes.number,
        }
    ),
    reportStatus: PropTypes.shape({
        status: PropTypes.oneOf(['REQUEST', 'FAIL']),
        type: PropTypes.oneOf(['CITY_REPORT']),
        payload: PropTypes.objectOf(Error)
    }),
    tempOption: PropTypes.string.isRequired
};
WeatherReport.defaultProps = {
    weatherReport: undefined,
    tempOption: 'imperial'
}
export default memo(WeatherReport);