import React, { createContext, createRef, PureComponent } from "react";
const WeatherContext = createContext();
export const WeatherConsumer = WeatherContext.Consumer;
export class WeatherProvider extends PureComponent {

    baseURL = 'http://api.openweathermap.org/data/2.5/weather?appid=333458e05b25c5e69a7c22d64b7bc47f';
    state = {
        report: [],
        httpStatus: [],
        locations: [],
        units: [
            { key: "standard", title: "kelvin" },
            { key: "imperial", title: "Farenheet" },
            { key: "metric", title: "celcius" }
        ]
    }
    setRequestHttpStatus = ({ type, id = -1 }) => {
        this.setState(({ httpStatus }) => {
            const index = httpStatus.findIndex(x => x.type === type && x.id === id);
            const data = { type: type, status: 'REQUEST', id };

            if (index === -1) {
                return { httpStatus: [...httpStatus, data] }
            } else {
                return { httpStatus: [...httpStatus.slice(0, 0), data, ...httpStatus.slice(0 + 1)] };
            }
        });
    }

    setSuccessHttpStatus = ({ type, id = -1 }) => {
        this.setState(({ httpStatus }) => ({
            httpStatus: [...httpStatus].filter(x => x.type !== type && x.id === id)
        }));
    }

    setFailedHttpStatus = ({ type, id = -1, error }) => {
        this.setState(({ httpStatus }) => {
            const index = httpStatus.findIndex(x => x.type === type && x.id === id);
            const data = { type, status: 'FAIL', id, error };
            return {
                httpStatus: [...httpStatus.slice(0, index), data, ...httpStatus.slice(index + 1)]
            }
        });
    }

    loadReportData = async (currentCityId, currentUnit) => {
        const cityId = currentCityId ? currentCityId : "Bengaluru,in";
        const unitId = currentUnit ? currentUnit : "standard";
        const urlParams = `&q=${cityId}&units=${unitId}`;
        const { locations } = this.state;
        const type = currentUnit ? 'CHANGE_UNIT' : 'LOAD_DATA';
        try {
            this.setRequestHttpStatus({ type });
            let url = `${this.baseURL}${urlParams}`;
            const res = await fetch(url);
            const json = await res.json();
            let reportData;
            if (!json.message) {
                reportData = {
                    name: `${json.name}, ${json.sys?.country}`,
                    description: `${json.weather[0]?.main} | ${json.weather[0]?.description}`,
                    icon: `${json.weather[0]?.icon}`,
                    temp: json.main?.temp,
                    temp_max: json.main?.temp_max,
                    temp_min: json.main?.temp_min,
                    wind_speed: json.wind?.speed,
                    wind_direction: json.wind?.deg,
                    humidity: json.main?.humidity,
                    pressure: json.main?.pressure,
                    unit: unitId === "imperial" ? "ºF" : unitId === "metric" ? "ºC" : "K",
                }
            }
            this.setState({
                report: json.message ? [] : reportData,
                locations: currentCityId ? [] : locations,
            });
            document.getElementById('searchInput').value = currentCityId ? "" : document.getElementById('searchInput').value;
            document.getElementById("unit-filter").value = currentUnit ? document.getElementById("unit-filter").value : "standard";
            this.setSuccessHttpStatus({ type });

        } catch (error) {
            this.setFailedHttpStatus({ type, error });
        }
    }

    fetchLocationInfo = async (event) => {
        const type = 'LOAD_CITY';
        try {
            const searchText = event.target.value;
            if (searchText.length > 2) {
                const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=8&appid=9168fc483359274a6a9c18343a0c6459`;
                this.setRequestHttpStatus({ type });
                const res = await fetch(url);
                const json = await res.json();
                this.setState({
                    locations: json.filter((v, i, a) => a.findIndex(t => (t.name.toLowerCase() === v.name.toLowerCase() && t.country.toLowerCase() === v.country.toLowerCase())) === i)
                });
            } else {
                this.setState({ locations: [] })
            }
            this.setSuccessHttpStatus({ type });
        } catch (error) {
            this.setFailedHttpStatus({ type, error });
        }
    }

    changeUnit = async (event) => {
        const type = 'CHANGE_UNIT';
        const { report } = this.state;
        try {
            const unitFilter = event.target.value;
            this.loadReportData(report.name, unitFilter);
        } catch (error) {
            this.setFailedHttpStatus({ type, error });
        }
    }

    async componentDidMount() {
        this.loadReportData();
        this.fetchLocationInfo = _.debounce(this.fetchLocationInfo, 1000);
        this.inputText = createRef();
    }

    render() {
        const { children } = this.props;
        const { report, locations, httpStatus, units } = this.state;
        const { loadDataStatus, loadCityStatus, defaultStatus, changeUnitStatus } = httpStatus.reduce((p, c) => {
            if (c.type === 'LOAD_DATA') return { ...p, loadDataStatus: c }
            if (c.type === 'LOAD_CITY') return { ...p, loadCityStatus: c }
            if (c.type === 'CHANGE_UNIT') return { ...p, changeUnitStatus: c }
            return { ...p, defaultStatus: [...p.defaultStatus, c] }
        }, { defaultStatus: [] });
        return (
            <WeatherContext.Provider value={{
                inputText: this.inputText,
                report,
                locations,
                units,
                loadReportData: this.loadReportData,
                loadDataStatus,
                loadCityStatus,
                defaultStatus,
                changeUnitStatus,
                fetchLocationInfo: this.fetchLocationInfo,
                changeUnit: this.changeUnit
            }}>
                {children}
            </WeatherContext.Provider>
        )
    }
}