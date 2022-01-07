import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import _ from 'lodash';
import { WeatherConsumer } from './context/WeatherContext';

const Input = lazy(() => import('./Input'));
const SearchResults = lazy(() => import('./SearchResults'));
const SetUnits = lazy(() => import('./SetUnits'));
const WeatherReports = lazy(() => import('./WeatherReports'));

export default class App extends PureComponent {
  inputText = createRef();

  // Render method
  render() {
    return (
      <div className="shadow-2xl border-8 border-solid ml-96 mr-96 mt-10">
        <div className="mx-2 my-2 bg-gray-50">
          <div className="flex flex-col px-2">
            <h1 className="border-b-2 border-red-500 w-full text-lg font-bold mt-4">
              WeatherWatch
            </h1>
          </div>
          <Suspense fallback={<h1>weather loading...</h1>}>
            <Input ref={this.inputText} />
          </Suspense>

          <WeatherConsumer>
            {({ changeUnit, changeUnits }) => (
              <Suspense fallback={<h1>units loading...</h1>}>
                <SetUnits changeUnits={changeUnits} currentUnit={changeUnit} />
              </Suspense>
            )}
          </WeatherConsumer>

          <WeatherConsumer>
            {({ cities, searchCities }) => (
              <Suspense fallback={<h1>Cities Loading...</h1>}>
                <SearchResults cities={cities} searchCities={searchCities} />
              </Suspense>
            )}
          </WeatherConsumer>

          <WeatherConsumer>
            {({ result, units }) => (
              <Suspense fallback={<h1>Result Loading...</h1>}>
                <WeatherReports result={result} units={units} />
              </Suspense>
            )}
          </WeatherConsumer>
        </div>
      </div>
    );
  }
}
