import React, { PureComponent, createRef, lazy, Suspense, useContext } from 'react';
import { WeatherConsumer, WeatherContext } from '../context/weatherContext';
import WeatherReport from './WeatherReport';
import SetUnits from './setunits';
import Input from './input';
import SearchResults from './SearchResults';

// const Input = lazy(() => import('./input'));
// const SetUnits = lazy(() => import('./setunits'));
// const WeatherReport = lazy(() => import('./WeatherReport'));

class App extends PureComponent {
  inputText = createRef();
  prevRef = null;
  constructor(props) {
    super(props);
  }

  async componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.prevRef !== this.ref.current) {
      console.log("ref changed!");
    }
    this.prevRef = this.ref.current;
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
            {({ setContextState, loadWeather, weatherData, getContextState, searchLocations }) => (
              <>
                <Input ref={this.inputText} setContextState={setContextState} loadWeather={loadWeather} getContextState={getContextState} />
                <SetUnits setContextState={setContextState} weatherResult={weatherData} />
              </>
            )}
          </WeatherConsumer>

        </div>
        <WeatherConsumer>
          {({ weatherData, units, rerender }) => (
            <>
              {Object.entries(weatherData).length === 0 && (
                <div className="animate-spin h-5 w-5 text-center">
                  <div className="w-4 h-4 rounded-full flex justify-center items-center text-center">
                    <p>*X*</p>
                  </div>
                </div>
              )}
              {(Object.entries(weatherData).length !== 0) && (
                <Suspense fallback={<h1>Loading...</h1>}>
                  <WeatherReport weatherResult={weatherData} units={units} />
                </Suspense>
              )}
            </>
          )}
        </WeatherConsumer>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
