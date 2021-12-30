import React, { createContext, PureComponent } from 'react';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
    state = {
        weatherData: {},
        city: 'Bengaluru',
        units: 'C'
    };


    setContextState = ({ weatherData, city, units }) => {
        this.setState({
            city,
            units,
            weatherData,
        })
    }
    getContextState = () => {
        return this.state;
    }
    async componentDidMount() {
        console.log('weatherContext render');
        this.loadWeather();
    }

    loadWeather = async () => {
        const type = 'LOAD_WEATHER';
        this.setState({
            status: type
        })
        try {
            let url = 'http://api.weatherapi.com/v1/forecast.json?key=1f03305478394edd87e150846212712&q=' + this.state.city + '&days=1&aqi=no&alerts=no';
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const json = await res.json();
            console.log(json);
            this.setState({
                weatherData: json,
                status: defaultStatus
            });

        } catch (error) {
            // Error
        }
    }
    render() {
        const { children } = this.props;
        const { weatherData, city, units } = this.state;

        return (
            <WeatherContext.Provider
                value={{
                    weatherData,
                    units,
                    city,
                    setContextState: this.setContextState,
                    loadWeather: this.loadWeather,
                    getContextState: this.getContextState
                }}>
                {children}
            </WeatherContext.Provider>
        )
    }
}