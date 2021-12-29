import React, { PureComponent, createRef, lazy, Suspense, debounce } from 'react';
import './weatherStyle.css';
import { WeatherConsumer } from './context/weatherContext';
const _ = require('lodash');

const SearchResult = lazy(() => import('./searchResult'));
const SearchForm = lazy(() => import('./searchForm'));
const SetUnit = lazy(() => import('./setUnit'));
const WeatherReport = lazy(() => import('./weatherReport'));

export default class WeatherWatchApp extends PureComponent {
    render() {
        return (
            <WeatherConsumer>
                {({ locations }) => (
                    <div className="p-3 h-screen border-5 border-b-red-600 flex flex-col bg-[#ececec] font-bold text-xs">
                        <div className="p-5 bg-[#F8F8F8] rounded-md">
                            <h2 className="border-b-2 border-b-red-600 w-full text-xl mt-2">WeatherWatch</h2>
                            <div className="mt-3 flex flex-row mb-2 relative">
                                <Suspense fallback={null}>
                                    <SearchForm />
                                </Suspense>
                                {locations.length > 0 &&
                                    <Suspense fallback={null}>
                                        <SearchResult />
                                    </Suspense>
                                }
                                <Suspense fallback={null}>
                                    <SetUnit />
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