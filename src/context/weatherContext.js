import React, { createContext, PureComponent } from 'react';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
    state = {
        weatherData: {},
        httpStatus: [],
    };
    setRequestStatus = ({ type, id = -1 }) => {
        this.setState(({ httpStatus }) => {
            const index = httpStatus.findIndex((x) => x.type === type && x.id === id);
            const data = { type, status: 'REQUEST', id };
            if (index === -1) {
                return {
                    httpStatus: [...httpStatus, data],
                };
            }
            return {
                httpStatus: [
                    ...httpStatus.slice(0, index),
                    data,
                    ...httpStatus.slice(index + 1),
                ],
            };
        });
    };

    setSuccessStatus = ({ type, id = -1 }) => {
        this.setState(({ httpStatus }) => ({
            httpStatus: httpStatus.filter((x) => !(x.type === type && x.id === id)),
        }));
    };

    setFailStatus = ({ type, payload, id = -1 }) => {
        this.setState(({ httpStatus }) => ({
            httpStatus: httpStatus.map((x) => {
                if (x.type === type && x.id === id) {
                    return { ...x, status: 'FAIL', payload };
                }
                return x;
            }),
        }));
    };
    async componentDidMount() {
        this.loadWeather('Bengaluru');
    }

    loadWeather = async (city) => {
        const type = 'LOAD_WEATHER';
        try {
            this.setRequestStatus({ type });
            let url = 'http://api.weatherapi.com/v1/forecast.json?key=1f03305478394edd87e150846212712&q=' + city + '&days=1&aqi=no&alerts=no';

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
                weatherData: json
            });
            this.setSuccessStatus({ type });
        } catch (error) {
            this.setFailStatus({ type, payload: error });
        }
    }
    render() {
        const { children } = this.props;
        const { weatherData, httpStatus } = this.state;

        return (
            <WeatherContext.Provider
                value={{
                    weatherData,
                    httpStatus,
                    loadWeather: this.loadWeather
                }}>
                {children}
            </WeatherContext.Provider>
        )
    }
}