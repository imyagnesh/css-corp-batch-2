import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './findWeather.css';

export default class FindWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: [
        {
          name: 'Chennai',
          temp: '45',
        },
        {
          name: 'Mumbai',
          temp: '34',
        },
        {
          name: 'Delhi',
          temp: '38',
        },
        {
          name: 'Madurai',
          temp: '43',
        },
        {
          name: 'Trichy',
          temp: '48',
        },
      ],
      cityFilter: '',
    };
    this.inputText = createRef();
  }

  filterCity = (event) => {
    event.preventDefault();
    this.setState(
      ({ cityFilter, cityInfo }) => {
        const inputValue = this.inputText.current.value;
        const matchedCity = cityInfo.find(({ name }) => name.toLowerCase() === inputValue.toLowerCase());
        return {
          cityFilter: matchedCity ? `${matchedCity.name} = ${matchedCity.temp} °C` : `${inputValue} not found`,
        };
      },
      () => {
        this.inputText.current.value = '';
        this.inputText.current.focus();
      },
    );
  };

  render() {
    const { cityList, cityFilter } = this.state;
    return (
      <div className="bg-slate-300 flex flew-with-400 flex-col py-10">
        <h1 className="text-center font-bold uppercase">Find Weather</h1>
        <form className="flex justify-center my-5" onSubmit={this.filterCity}>
          <input type="text" className="input mr-5" ref={this.inputText}></input>
          <button type="submit" className="btn-primary">Find Weather</button>
        </form>
        <div className="flex justify-center font-bold">
          {cityFilter}
        </div>
      </div>
    )
  }
}