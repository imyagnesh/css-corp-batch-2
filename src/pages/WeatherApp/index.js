import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './weatherApp.css';

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList:[
        {
          name: "Delhi", 
          temperature: "28",
        }, 
        {
          name: "Mumbai", 
          temperature: "18",
        }, 
        {
          name: "Kolkata", 
          temperature: "22",
        }, 
        {
          name: "Bangalore", 
          temperature: "12",
        }, 
        {
          name: "Chennai", 
          temperature: "13",
        }, 
        {
          name: "Hyderabad", 
          temperature: "17",
        }, 
        {
          name: "Pune", 
          temperature: "18",
        }, 
        {
          name: "Ahmedabad", 
          temperature: "23",
        }, 
      ],
      cityToFilter: '',
    };

    this.inputText = createRef();
  }

  filterCity = (event) => {
    event.preventDefault();
    this.setState(
      ({ cityToFilter }) => {
        // const todoText = document.getElementById('todoText').value;
        // O(1)
        const cityName = this.inputText.current.value;
        return {
          cityToFilter: cityName.toString().trim(),
        };
      },
      () => {
        // document.getElementById('todoText').value = '';
        this.inputText.current.value = '';
        this.inputText.current.focus();
      },
    );
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.cityToFilter != nextState.cityToFilter;
    }
  render() {
    console.log('render called');
    const { cityList, cityToFilter } = this.state;
    const filteredCity = cityList.find(({name}) => name.toLowerCase() === cityToFilter.toLowerCase());
    return (
      <div className="bg-slate-200 h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Weather App</h1>
        <form className="flex justify-center my-2" onSubmit={this.filterCity}>
          <input type="text" className="input" ref={this.inputText} />
          <button type="submit" className="btn-primary">
            Check Weather
          </button>
        </form>
        <div className="flex justify-center">
          {
            Boolean(filteredCity) 
              ? (
              <div className="flex items-center m-2">
                Temperature of {filteredCity.name} is {filteredCity.temperature}
              </div>
              ) : (
                Boolean(cityToFilter) && 
                <div className="flex items-center m-2">
                  {cityToFilter.charAt(0).toUpperCase() + cityToFilter.slice(1)} is not found in our database.
                </div>
              )
          }
        </div>
      </div>
    );
  }
}
