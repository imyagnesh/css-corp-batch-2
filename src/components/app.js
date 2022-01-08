import React, { PureComponent, createRef, lazy, Suspense, useContext } from 'react';
import { WeatherConsumer } from '../context/weatherContext';
import WeatherReport from './WeatherReport';
import SetUnits from './setunits';
import Input from './input';
import SearchResults from './SearchResults';
import PropTypes from 'prop-types';

// const Input = lazy(() => import('./input'));
// const SetUnits = lazy(() => import('./setunits'));
// const WeatherReport = lazy(() => import('./WeatherReport'));

class App extends PureComponent {
  inputText = createRef();
  constructor(props) {
    super(props);
  }

  async componentDidMount() {

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
          <WeatherConsumer>
            {({ setContextState, units, weatherData, getContextState, searchLocations }) => (
              <>
                <Input ref={this.inputText} setContextState={setContextState} getContextState={getContextState} units={units} />
                <SetUnits setContextState={setContextState} weatherResult={weatherData} />
              </>
            )}
          </WeatherConsumer>

        </div>
        <WeatherConsumer>
          {({ weatherData, units, getContextState, error }) => (
            <>
              {Object.entries(weatherData).length === 0 && !error && (
                <div className="animate-spin h-5 w-5 text-center">
                  <div className="w-4 h-4 rounded-full flex justify-center items-center text-center">
                    <p>*X*</p>
                  </div>
                </div>
              )}
              {(Object.entries(weatherData).length !== 0) && (
                <Suspense fallback={<h1>Loading...</h1>}>
                  <WeatherReport weatherResult={weatherData} units={units} getContextState={getContextState} />
                </Suspense>
              )}
            </>
          )}
        </WeatherConsumer>
      </div>
    );
  }
}

export default App;
