import React, { Component, createRef } from 'react';
//import cn from 'classnames';





export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
          weatherList: [
            { id: 1, city: "TamlNadu", temperature:23},
            { id: 2, city: "Delhi", temperature:11},
            { id: 3, city: "Bangalore", temperature:25},
            { id: 4, city: "Kerala", temperature:12},
            { id: 5, city: "Pune", temperature:20},
          ]
        };

      }

    checkWeather = (event) => {
        event.preventDefault();
        console.log('test');
    }

    render() {
        //console.log('render');
        return (
            <div className="bg-[#FAFAFA] h-screen flex flex-col">
                <h1 className="text-center my-2 text-lg font-bold">Weather App</h1>
                <form className="flex justify-center my-2" onSubmit={this.checkWeather}>
                <input type="text" className="input" ref=''/>
                <button type="submit" className="btn-primary">
                  Check Weather
                </button>
                </form>
            </div>
        )
    }
}