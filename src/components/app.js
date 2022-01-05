import React, { Component, createRef } from 'react'
import ReactDom from 'react-dom'
import '../root.css'
import Input from './input'
import SearchResult from './searchresult'
import SetUnit from './setunit'
import WeatherReport from './weatherreport'
import debounce from 'lodash.debounce';

class App extends Component {
    state = { currentCity: null, cities: [], invalidCity: null }

    inputText = createRef()
    searchLocation = async (keyword) => {
        try {
            const res = await fetch(`https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities?name_like=${keyword}`)

            const json = await res.json();
            const invalidCity = json.length ? null : keyword
            this.setState({ cities: json, invalidCity: invalidCity })

        }
        catch {

        }
    }
    getWeather = async (cityId) => {
        try {
            const res = await fetch(`https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities/${cityId}/report?_embed=celsius`)

            const json = await res.json();

            this.setState({ currentCity: json[0], cities: [], invalidCity: null }, () => { this.inputText.current.value = '' })

        }
        catch {

        }
    }
    getInputValue = debounce(() => {
        const inputValue = this.inputText.current.value;

        this.searchLocation(inputValue)
    }, 500)
    componentDidMount() {
        this.getWeather(4) //setting defualt city as Banglure

    }


    render() {

        const { cities, currentCity, invalidCity } = this.state;

        return <div className="container_weather" >
            <h1 className="text-red-500 underline">WeatherWatch</h1>
            <div className="flex w-120 h-14 mb-8 rounded-md  border-2">
                <Input ref={this.inputText} getInput={this.getInputValue} />
                <SetUnit />
            </div>

            <SearchResult city={cities} invalidcity={invalidCity} getweather={this.getWeather} />
            {currentCity !== null &&
                <WeatherReport currentcity={currentCity} />
            }


        </div>

    }
}

ReactDom.render(<App />, document.getElementById('root'))



