import React, { PureComponent, createRef, lazy, Suspense, useContext } from 'react';
import { WeatherConsumer, WeatherContext } from '../context/weatherContext';
import WeatherReport from './WeatherReport';
import SetUnits from './setunits';
import Input from './input';

//const Input = lazy(() => import('./input'));
//const SetUnits = lazy(() => import('./setunits'));
//const WeatherReport = lazy(() => import('./WeatherReport'));

class App extends PureComponent {
    inputText = createRef();
    constructor(props) {
        super(props);

    }


    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

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

                    <Input />

                    <Suspense fallback={<h1>Loading......</h1>}>
                        <SetUnits />
                    </Suspense>
                </div>
                <WeatherConsumer>
                    {({ weatherData }) => (
                        <>
                            {Object.entries(weatherData).length !== 0 && (
                                <WeatherReport weatherResult={weatherData} />
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