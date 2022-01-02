import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherConsumer } from '../context/weatherContext';

const WeatherReport = () => {
    return (
        <WeatherConsumer>
            {({ report, loadDataStatus, loadReportData, changeUnitStatus }) => (
                <div className="border bg-white">
                    {loadDataStatus?.status ? (
                        <div className="w-100">
                            {!loadDataStatus?.error ? (
                                <div className="loading"></div>
                            ) :
                                <p className='flex h-[40vh] justify-center items-center'>{loadDataStatus.error?.message}
                                    <button type="button" className="mx-3" onClick={() => { loadReportData(); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    </button>
                                </p>
                            }
                        </div>
                    ) :
                        <>
                            {report?.name ? (
                                <>
                                    <div className="relative mt-3 mb-2 p-5 flex flex-row flex-wrap justify-items-center">
                                        <div className="w-5/6">
                                            <h1 className="text-3xl">{report.name}</h1>
                                            {
                                                report?.description && (
                                                    <p className="uppercase font-xs text-gray-350 py-1">{report.description}</p>
                                                )}
                                        </div>
                                        {report?.icon && (
										    <div className="w-1/6">
                                                <img src={`http://openweathermap.org/img/wn/${report.icon}@2x.png`} className="w-6/6 h-4/6 bg-[#eca88e] rounded-full  float-right" />
											</div>
                                        )}

                                    </div>
                                    <div className="relative">
                                        {changeUnitStatus?.status === "REQUEST" ?
                                            <div className="w-full absolute top-2 bottom-0 opacity-70 z-10">
                                                <div className="loading"></div>
                                            </div>
                                            : changeUnitStatus?.status === "FAIL" ?
                                                <div className="w-full bg-gray-200 absolute top-0 bottom-0 opacity-70 z-10">
                                                    <p className="absolute top-28 w-full text-center flex flex-row justify-center items-center">{changeUnitStatus.error.message}
                                                        <button type="button" className="mx-3" onClick={() => {
                                                            loadReportData(report.name, document.getElementById("unit-filter").value);
                                                        }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                            </svg>
                                                        </button>
                                                    </p>
                                                </div>
                                                : ''}
                                        <div className="m-0 flex flex-row px-5 flex-wrap justify-items-center text-white text-center font-medium uppercase">
                                            {report?.temp && (
                                                <div className="colum-3">
                                                    <p className="colum-p">Current Temparature
                                                        <span className="number-bold">{report.temp}{report.unit}</span>
                                                    </p>
                                                </div>
                                            )}
                                            {report?.temp_max && (
                                                <div className="colum-3">
                                                    <p className="colum-p">Maximum Temparature
                                                        <span className="number-bold">{report.temp_max}{report.unit}</span>
                                                    </p>
                                                </div>
                                            )}

                                            {report?.temp_min && (
                                                <div className="colum-3">
                                                    <p className="colum-p">Minimum Temparature
                                                        <span className="number-bold">{report.temp_min}{report.unit}</span>
                                                    </p>
                                                </div>
                                            )}
                                            {report?.wind_speed && (
                                                <div className="colum-2-top">
                                                    <p className="colum-p">Wind Speed
                                                        <span className="number-bold-padding">{report.wind_speed} <em className="colum-2-unit">meter/sec</em></span>
                                                    </p>
                                                </div>
                                            )}
                                            {report?.wind_direction && (
                                                <div className="colum-2-top">
                                                    <p className="colum-p">Wind direction
                                                        <span className="number-bold-padding">{report.wind_direction} <em className="colum-2-unit">Degrees</em></span>
                                                    </p>
                                                </div>
                                            )}
                                            {report?.pressure && (
                                                <div className="colum-2-bottom">
                                                    <p className="colum-p">Pressure
                                                        <span className="number-bold-padding">{report.pressure}<em className="colum-2-unit">hPa</em></span>
                                                    </p>
                                                </div>
                                            )}
                                            {report?.humidity && (
                                                <div className="colum-2-bottom">
                                                    <p className="colum-p">Humidity
                                                        <span className="number-bold-padding">{report.humidity}<em className="colum-2-unit">%</em></span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) :
                                <p className='flex h-[40vh] justify-center items-center'>Data not found</p>
                            }

                        </>}
                </div>
            )}
        </WeatherConsumer>
    )
}

WeatherReport.propTypes = {
    report: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
        wind_speed: PropTypes.number.isRequired,
        wind_direction: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
    }),
    loadDataStatus: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.objectOf(Error),
        status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    }),
    loadReportData: PropTypes.func,
    changeUnitStatus: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.objectOf(Error),
        status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    })
}

export default memo(WeatherReport);