import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import cn from 'classnames';
import './style.css';
const WeatherForm = lazy(() => import('./weatherForm'));
const WeatherReport = lazy(() => import('./weatherReport'));

export default class Weather extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            report: {},
            weatherList: []
        };
        this.inputText = createRef();
    }
    async componentDidMount() {
        this.loadWeatherDetails();
    }
    loadWeatherDetails = async () => {
        try {
            let url = 'http://localhost:3000/weather-info';
            const res = await fetch(url);
            const json = await res.json();
            this.setState({
                weatherList: json,
            });
        } catch (error) {

        }
    }
    checkWeather = (event) => {
        event.preventDefault();
        const cityName = this.inputText.current.value;
        this.inputText.current.value = "";
        const availableCity = this.state.weatherList.find(x => x.cityName.toLowerCase() === cityName.toLowerCase());
        this.setState(({ weatherList, report }) => ({
            weatherList,
            report: availableCity ? availableCity : { "cityName": cityName },
        })
        )
    }
    render() {
        const { weatherList, report } = this.state;
        return (<div className="bg-[#FAFAFA] h-screen flex flex-col">
            <Suspense fallback={<h1>Loading...</h1>}>
                <WeatherForm inputText={this.inputText} checkWeather={this.checkWeather} />
            </Suspense>
            {Object.keys(report).length > 0 && report.cityName && (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <WeatherReport report={report} />
                </Suspense>
            )}
        </div >)
    }
}