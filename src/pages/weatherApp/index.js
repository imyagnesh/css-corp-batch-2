import React, { PureComponent, lazy, Suspense } from 'react';
import './weatherStyle.css';
import { WeatherConsumer } from './context/weatherContext';

const _ = require('lodash');

const SearchResult = lazy(() => import('./weatherSearchResults'));
const SearchForm = lazy(() => import('./weatherInput'));
const SetUnit = lazy(() => import('./weatherSetUnit'));
const WeatherReport = lazy(() => import('./weatherReport'));

export default class WeatherWatchApp extends PureComponent {
  render() {
    return (
      <WeatherConsumer>
        {({ locations }) => (
          <div className="p-3 h-screen border-5 border-b-red-600 flex justify-center flex-col bg-[#ececec] font-bold text-xs w-3/6 md:w-4/6 sm:w-5/6">
            <div className="p-5 bg-[#F8F8F8] rounded-md">
              <h2 className="border-b-2 border-b-red-600 w-full text-xl mt-2">WeatherWatch</h2>
              <div className="mt-3 flex flex-row mb-2 relative">
                <Suspense fallback={null}>
                  <SearchForm />
                </Suspense>
                {locations.length > 0
                                    && (
                                    <Suspense fallback={null}>
                                      <SearchResult />
                                    </Suspense>
                                    )}
                <Suspense fallback={null}>
                  <SetUnit />
                </Suspense>
              </div>
              <Suspense fallback={null}>
                <WeatherReport />
              </Suspense>
            </div>
          </div>
        )}
      </WeatherConsumer>
    );
  }
}
