import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import { WeatherConsumer } from './context/weatherContext';
import './style.css';

const WeatherResult = lazy(() => import('./component/weatherResult'));
const WeatherForm = lazy(() => import('./component/weatherForm'));
const WeatherUnit = lazy(() => import('./component/weatherUnit'));
const WeatherReport = lazy(() => import('./component/weatherReport'));

export default class WeatherWatchApp extends PureComponent {
    render() {
        return (
            <WeatherConsumer>
                {({ locations }) => (
                    <div className="p-3 border-5 border-b-red-600 flex flex-col bg-gray-300 font-bold">
                        <div className="p-5 bg-gray-200 rounded-md">
                            <h2 className="border-b-2 border-b-orange-600 w-full text-xl mt-2">WeatherWatch</h2>
                            <div className="mt-3 flex flex-row mb-2 relative">
                                <Suspense fallback={null}>
                                    <WeatherForm />
                                </Suspense>
                                {locations.length > 0 &&
                                    <Suspense fallback={null}>
                                        <WeatherResult />
                                    </Suspense>
                                }
                                <Suspense fallback={null}>
                                    <WeatherUnit />
                                </Suspense>
                            </div>
                            <Suspense fallback={null}>
                                <WeatherReport />
                            </Suspense>
                        </div>
                    </div >
                )}
            </WeatherConsumer>
        )
    }
}