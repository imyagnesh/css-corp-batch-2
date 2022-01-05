import React, { Component, memo, useRef, useState, useEffect, useCallback } from 'react';
import WeatherForm from './weatherForm';
import WeatherSearchResults from './WeatherSearchResults';
import WeatherReport from './WeatherReport';
import WeatherUnits from './weatherUnit';
import debounce from "lodash.debounce";
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appId = '333458e05b25c5e69a7c22d64b7bc47f';

const Weather = () => {
    const [searchResult, setsearchResult] = useState([]);
    const [weatherReport, setweatherReport] = useState({});
    const [locationText, setlocationText] = useState('');
    const [tempOption, settempOption] = useState('imperial');
    const [selectedcity, setselectedcity] = useState('bangalore');
    const [error, seterror] = useState('');
    const [httpStatus, setHttpStatus] = useState([]);
    const inputRef = useRef();
  
    const loadingStatus = ({ type, id = -1 }) => {
        setHttpStatus((existingStatus) => {
            const findIndexNo = existingStatus.findIndex((item) => item.type === type && item.id === id);
            const data = { type, status: 'REQUEST', id };

            if (findIndexNo == -1) {
                return [...existingStatus, data]
            }
            return [...existingStatus.slice(0, findIndexNo), data, ...existingStatus.slice(findIndexNo + 1)];
        });
    }

    const successStatus = ({ type, id = -1 }) => {
        setHttpStatus((existingStatus) =>
            existingStatus.filter((item) => !(item.type === type && item.id === id))
        );
    };

    const errorStatus = ({ type, payload, id = -1 }) => {

        setHttpStatus((existingStatus) =>
            existingStatus.map((item) => {
                if (item.type === type && item.id === id) {
                    return { ...item, status: 'FAIL', payload };
                }
                return item;
            }),
        );
    };

    const findLocation = async () => {
        const type = 'SEARCH_CITY';
        try {
            loadingStatus({ type });
            const location = inputRef.current.value;
            if (!location) {
                throw new Error("Please enter city")
            }
            const result = await fetch('https://my-json-server.typicode.com/kiransachinyadav/mockapi/cities');
            if (!result.ok) throw new Error("wrong API")
            const json = await result.json();
            const searchResults = json.filter((item) => item.name.toLowerCase().startsWith(location.toLowerCase()));
            setsearchResult(searchResults);
            setlocationText(location);
            successStatus({ type });
        } catch (error) {
            errorStatus({ type, payload: error });
        }
    };
    const searchLocations = debounce((text) => { findLocation(); }, 1000);

    const getWeather = async (city = selectedcity) => {
        const type = 'CITY_REPORT';
        try {
            loadingStatus({ type });
            const result = await fetch(`${apiUrl}?q=${city}&units=${tempOption}&appid=${appId}`)
            if (!result.ok) throw new Error("Something went wrong with weather report API")
            const json = await result.json();
            setweatherReport(json);
            setselectedcity(city)
            successStatus({ type });
        } catch (error) {
            errorStatus({ type, payload: error });
        }

    }
    const UpdateTemp = (val) => {
        settempOption(val);
    }
    useEffect(() => {
        getWeather()
    }, [tempOption]);

    const searchStatus = httpStatus.find((x) => x.type === 'SEARCH_CITY');
    const reportStatus = httpStatus.find((x) => x.type === 'CITY_REPORT');
    return (
        <div className=" bg-gray-100">
            < div className=" flex flex-col bg-slate-50 mx-10 py-5 px-5" >
                <div className="justify-center mx-1 my-1 divide-y divide-dashed">
                    <h1 className="font-bold text-xl border-b border-red-800">WeatherWatch</h1>
                </div>

                <div className='flex mt-5'>
                    <WeatherForm ref={inputRef} setlocationText={setlocationText} searchLocations={searchLocations} />
                    <WeatherUnits UpdateTemp={UpdateTemp} />
                </div>
                <WeatherSearchResults locationText={locationText} searchResult={searchResult} searchStatus={searchStatus} getWeather={getWeather} />
                <div className="flex flex-col bg-white px-5 my-3">
                    <div className="">
                        {reportStatus?.status === 'REQUEST' && <div className="font-semibold text-red-400">Loading...</div>}
                        {reportStatus?.status === 'FAIL' && <div className=" font-semibold text-red-800">{reportStatus.payload.message}</div>}
                    </div>
                    {weatherReport.name && <WeatherReport weatherReport={weatherReport} reportStatus={reportStatus} tempOption={tempOption} />}
                </div>
            </div>
        </div>
    );
}
export default memo(Weather);