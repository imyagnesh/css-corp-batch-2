import React, { forwardRef, memo } from 'react';
import { WeatherConsumer } from './weatherContext';

const Input = forwardRef((props, ref) => (
  <WeatherConsumer>
    {({ getWeatherResults }) => (
      <div className="inline-block pl-2 rounded-md pt-6 w-3/4">
        <div className="border border-3 bg-white rounded-md">
          <div>
            <div className="inline-block">
              <div className="w-full pl-3 font-bold uppercase">Location</div>
              <input
                type="text"
                className="pb-4 outline-0 pl-4"
                onChange={(event) => getWeatherResults(event)}
                ref={ref}
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </WeatherConsumer>
));

export default memo(Input);