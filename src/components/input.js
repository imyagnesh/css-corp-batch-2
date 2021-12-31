import React, { createRef, PureComponent, useCallback } from 'react';
import _ from 'lodash';
import SearchResults from './SearchResults'
import { WeatherConsumer } from '../context/weatherContext';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      searchResults: [],
    })
  }
  setContextState = this.props.setContextState;
  state = this.props.getContextState;
  inputText = createRef();
  result = [];
  //handler = useCallback(debounce(this.searchLocations, 1000), []);
  //debounceCalculate = debounce(function () { this.searchLocations(), 1000);
  handleInputTextChangeDebounced = _.debounce((value) => this.searchLocations(value), 700);
  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 2) {
      this.handleInputTextChangeDebounced(e.target.value);
      //debounce(function () {
      //this.searchLocations(e.target.value)
      //}, 1000);
    }
    /*setContextState({
      city: e.target.value || 'Bengaluru',
      weatherData: {},
      units: state.units,
    });*/
  }

  searchLocations = async (keyword) => {
    try {
      const url = `http://api.weatherapi.com/v1/search.json?key=1f03305478394edd87e150846212712&q=${keyword}`;
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
        searchResults: json
      })
    } catch (error) {
      // Error
    }
  }

  render() {
    return (
      <div className="pt-6 w-3/4">
        <div className="border border-3">
          <div>
            <div><label className="w-full pl-3 font-bold">LOCATION</label></div>
            <input className="pb-4" type="text" ref={this.inputText} onChange={this.handleChange} />
            <WeatherConsumer>
              {({ units, setContextState, loadWeather }) => (
                <>
                  {this.state.searchResults.length > 0 && (
                    <SearchResults result={this.state.searchResults} units={units} setContextState={setContextState} loadWeather={loadWeather} />
                  )}
                </>
              )}
            </WeatherConsumer>
          </div>
        </div>
      </div>
    );
  }
};
export default Input;