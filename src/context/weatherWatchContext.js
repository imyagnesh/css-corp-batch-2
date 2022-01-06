import React, { createContext, PureComponent } from 'react';

const WeatherWatchContext = createContext();

export const WeatherWatchConsumer = WeatherWatchContext.Consumer;

export class WeatherWatchProvider extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <WeatherWatchContext.Provider value={{

            }}>
                {children}
            </WeatherWatchContext.Provider>
        )
    }
}