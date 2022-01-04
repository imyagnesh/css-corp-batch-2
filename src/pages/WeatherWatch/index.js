import React, { createRef, PureComponent, lazy, Suspense } from 'react'
//import SearchResults from './components/searchResults';
import './WeatherWatchStyle.css';
import _ from 'lodash';


//import Input from './components/Input';
//import WeatherButton from './components/WeatherButton';
//import SearchResultTitle from './components/SearchResultTitle';

const Input = lazy(() => import('./components/Input'));
const WeatherButton = lazy(() => import('./components/WeatherButton'));
const SearchResults = lazy(() => import('./components/searchResults'));
const SearchResultTitle = lazy(() => import('./components/SearchResultTitle'));
const cityList = [
    'Chennai',
    'Chicago',
    'Kolkatta',
    'Kerela',
    'Bangalore',
    'Delhi',
    'Denmark',
    'Chandigarh',
    'Bangladesh',
    'London',
    'Long Island',
    'Japan',
    'Jamshedpur'
]

export default class WeatherWatch extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            cityDetails: [],
            loading: false,
            cityName: "",
            temp: 0,
            minTemp: 0,
            maxTemp: 0,
            feelsLike: "",
            pressure: "",
            humidity: "",
            windSpeed: "",
            windDirection: "",
            err: null,
            checked: true,
            searchText: "",
            filteredCity: []
        };
        this.inputText = createRef();
    }


    async componentDidMount() {
        this.loadWeatherDetails('Bangalore', 'metric');
    }

    loadWeatherDetails = async (city, units) => {
        const API_KEY = "333458e05b25c5e69a7c22d64b7bc47f";
        try {
            this.setState({
                loading: true,
                err: null,
                filteredCity: []
            });
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`, {
                method: 'GET'
            });

            const json = await res.json()

            this.setState({
                cityDetails: json,
                isFound: true,
                cityName: json.name,
                temp: json.main.temp,
                minTemp: json.main.temp_min,
                maxTemp: json.main.temp_max,
                feelsLike: json.main.feels_like,
                pressure: json.main.pressure,
                humidity: json.main.humidity,
                windSpeed: json.wind.speed,
                windDirection: json.wind.deg,
            })
        } catch (err) {
            this.setState({
                err: err
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }


    handleSearch = (e) => {
        if (e.target.value !== "") {
            this.setState({
                searchText: e.target.value
            }, () => {
                let query = this.state.searchText;
                const filterList = cityList.filter(city => city.toLowerCase().search(query.toLowerCase()) !== -1);

                this.setState({
                    filteredCity: filterList
                })
            })
        } else {
            this.setState({
                filteredCity: []
            })

        }
    }

    searchCity = _.debounce(this.handleSearch, 300);

    handleOnUnitChange = () => {
        const { cityName, checked } = this.state;
        this.setState({
            checked: !checked,
        }, () => {
            !checked ? this.loadWeatherDetails(cityName, 'metric') : this.loadWeatherDetails(cityName, 'imperial')
        })
    }


    getCity = () => {
        const { checked } = this.state;
        const location = this.inputText.current.value;
        // this.loadWeatherDetails(location, 'metric');
        //   console.log('checked', checked);
        if (!checked) {
            this.loadWeatherDetails(location, 'imperial')
        } else {
            this.loadWeatherDetails(location, 'metric')
        }
        this.inputText.current.value = '';
    }


    render() {
        console.log('render');

        const { search, cityDetails, cityName, temp, minTemp, maxTemp, feelsLike, pressure, humidity, windSpeed, windDirection, checked, loading, err, filteredCity } = this.state;

        return (
            < div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" >
                <div class="p-3 bg-gray-300 w-1/2 ">
                    <div className="h-auto py-10 px-10  bg-gray-200 flex flex-col space-y-2 mx-auto rounded-md shadow-xl">

                        <div className="border-2  border-b-red-500" >
                            <h1 className=" font-bold  text-2xl ">WeatherWatch</h1>
                        </div>


                        <Suspense fallback={<h1>Loading...</h1>}>
                            {/* input section */}
                            <Input ref={this.inputText} checked={checked} handleOnUnitChange={this.handleOnUnitChange} searchCity={this.searchCity} />
                        </Suspense>

                        {filteredCity != "" ? <div className='flex flex-row'>
                            {filteredCity.map((city) =>
                                <div >{city}&nbsp;</div>
                            )}
                        </div> : ""}

                        {/* Result section */}
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <div className="flex-col items-center  p-6 space-x-2 bg-white rounded-lg shadow-lg h-196 ">
                                {/* {loading && <div className="flex justify-center items-center h-full">
                                    <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
                                </div>
                                } */}
                                {err && <h1 className='text-center text-red-500'>{err.message}</h1>}
                                <div className="flex items-center p-4 space-x-6  ">
                                    <SearchResultTitle cityName={cityName} feelsLike={feelsLike} checked={checked} />
                                    <WeatherButton getCity={this.getCity} />
                                </div>

                                <SearchResults
                                    temp={temp} minTemp={minTemp} maxTemp={maxTemp} pressure={pressure} humidity={humidity}
                                    windSpeed={windSpeed} windDirection={windDirection} checked={checked}
                                />
                            </div>
                        </Suspense>

                    </div>
                </div>
            </div >

        )
    }
}
