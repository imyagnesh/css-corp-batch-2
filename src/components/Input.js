import React, { forwardRef, memo } from 'react';
import { WeatherConsumer } from './context/WeatherContext';

const Input = forwardRef((props, ref) => (
  <WeatherConsumer>
    {({ getWeatherResults }) => (
      <div className="pt-6 w-3/4 inline-block pl-2 rounded-md">
        <div className="border border-3 bg-white rounded-md">
          <div>
            <div className="bg-white inline-block">
              <div className="w-full pl-3 font-bold uppercase">Location</div>
              <input
                type="text"
                className="pb-4 outline-0 pl-4"
                size="50"
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
