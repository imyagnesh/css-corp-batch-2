import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { WeatherConsumer } from '../../context/WeatherContext';

const Input = forwardRef((props, ref) => {
    return (
        <WeatherConsumer>
            <div className="pt-6 w-1/4">
                <div className="border border-3">
                    <div>
                        <div><label className="w-full pl-3 font-bold">UNITS</label></div>
                        <div class="relative inline-block w-1/2 text-gray-700">
                            <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border-0 rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                <option>Celcius</option>
                                <option>Faranheit</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WeatherConsumer>
    );
});

export default memo(SetUnits);