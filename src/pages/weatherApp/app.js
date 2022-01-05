import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import _ from 'lodash';
import { WeatherConsumer } from './weatherContext';
import Input from './weatherInput';
import SearchResults from './searchResult';
import SetUnits from './weatherSetUnit';
import WeatherReports from './weatherReport'; 

export default class App extends PureComponent {
  inputText = createRef();

  // Render method
  render() {
    return (
      <div className="bg-gray-200 p-3 h-full font-bold text-xs flex flex-col">
        <div className="mx-2 my-2 bg-gray-50">
          <div className="px-2">
            <h1 className="w-full text-xl border-b-2 border-b-red-500 mt-2">
              WeatherWatch
            </h1>
          </div>
          <Suspense fallback={<h1>weather loading...</h1>}>
            <Input ref={this.inputText} />
          </Suspense>

          <WeatherConsumer>
            {({ changeUnit, changeUnits }) => (
              <Suspense fallback={<h1>Weather units loading...</h1>}>
                <SetUnits changeUnits={changeUnits} currentUnit={changeUnit} />
              </Suspense>
            )}
          </WeatherConsumer>

          <WeatherConsumer>
            {({ name, searchCities }) => (
              <Suspense fallback={<h1>Weather cities Loading...</h1>}>
                <SearchResults cities={name} searchCities={searchCities} />
              </Suspense>
            )}
          </WeatherConsumer>

          <WeatherConsumer>
            {({
              city,
              description,
              units,
              currentTemp,
              windSpeed,
              maxTemp,
              minTemp,
              windDct,
              pressure,
              humidity,
              feelsLike,
            }) => (
              <Suspense fallback={<h1>Result Loading...</h1>}>
                <WeatherReports
                  city={city}
                  description={description}
                  units={units}
                  currentTemp={currentTemp}
                  windSpeed={windSpeed}
                  maxTemp={maxTemp}
                  minTemp={minTemp}
                  windDct={windDct}
                  pressure={pressure}
                  humidity={humidity}
                  feelsLike={feelsLike}
                />
              </Suspense>
            )}
          </WeatherConsumer>
        </div>
      </div>
    );
  }
}