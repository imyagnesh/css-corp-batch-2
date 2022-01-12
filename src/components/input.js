import React, { Component, createRef, PureComponent, useCallback } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import { WeatherConsumer } from '../context/weatherContext';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      searchResults: [],
    });
  }

  static propTypes = {
    setContextState: PropTypes.func.isRequired,
    getContextState: PropTypes.func.isRequired,

  };

  setContextState = this.props.setContextState;

  stateObj = this.props.getContextState();

  inputText = createRef();

  result = [];

  // handler = useCallback(debounce(this.searchLocations, 1000), []);
  // debounceCalculate = debounce(function () { this.searchLocations(), 1000);
  handleInputTextChangeDebounced = _.debounce((value) => this.searchLocations(value), 700);

  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 2) {
      (document.getElementById('citysearch')) ? document.getElementById('citysearch').style.display = 'block' : '';
      this.setContextState({
        ...this.stateObj,
        unitsChanged: 0,
        units: this.props.units,
      });

      this.handleInputTextChangeDebounced(e.target.value);
    } else {
      (document.getElementById('citysearch')) ? document.getElementById('citysearch').style.display = 'none' : '';
    }
  };

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
      if (Object.entries(json) === 0) {
        this.setState({
          searchResults: json,
          emptyResult: 1,
        });
      } else {
        console.log(json);
        this.setState({
          searchResults: json,
          emptyResult: 0,
        });
      }
    } catch (error) {
      this.setContextState({
        error,
      });
    }
  };

  render() {
    return (
      <div className="pt-6 w-3/4">
        <div className="border border-3">
          <div>
            <div><label className="w-full pl-3 font-bold">LOCATION</label></div>
            <input className="pb-4 w-full" type="text" id="cityname" ref={this.inputText} onChange={this.handleChange} />
            <WeatherConsumer>
              {({ units, setContextState, getContextState, error }) => (
                <>
                  {this.state.searchResults.length === 0 && this.state.emptyResult === 0 && (
                    <h1 className="text-black-50">No matching cities found</h1>
                  )}
                  {error && error.message && (
                    <h1 className="text-red-500">{error.message}</h1>
                  )}
                  {this.state.searchResults.length > 0 && (
                    <SearchResults result={this.state.searchResults} units={units} setContextState={setContextState} getContextState={getContextState} />
                  )}
                </>
              )}
            </WeatherConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
