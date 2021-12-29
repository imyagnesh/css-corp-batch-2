import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import SetUnits from './setunits';
import WeatherReport from './WeatherReport';


class App extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        // api call
        //  https://api.weatherapi.com/v1/forecast.json?key=1f03305478394edd87e150846212712&q=London&days=1&aqi=no&alerts=no
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="w-3/5 ml-48 shadow-2xl border-8 border-solid">
                <div className="flex flex-col border-red-500  border-0 border-b-2 border-solid">
                    <h1 className="w-full text-lg text-gray-500">WeatherWatch</h1>
                </div>
                <div className="flex">
                    <Input /><SetUnits />
                </div>
                <WeatherReport />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;