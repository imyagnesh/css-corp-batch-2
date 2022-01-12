import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SetUnits extends Component {
  constructor(props) {
    super(props);
    this.setContextState = props.setContextState;
  }

  static propTypes = {
    setContextState: PropTypes.func.isRequired,
    weatherData: PropTypes.object,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    (document.getElementById('citysearch')) ? document.getElementById('citysearch').style.display = 'none' : '';
    if (e.target.value) {
      this.setContextState({
        units: e.target.value,
        weatherData: this.props.weatherResult,
        unitsChanged: 1,
      });
    }
  };

  componentDidMount() {
    console.log('setUnits render');
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="pt-6 w-1/4">
        <div className="border border-3">
          <div>
            <div><label className="w-full pl-3 font-bold">UNITS</label></div>
            <div className="relative inline-block w-1/2 text-gray-700">
              <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border-0 rounded-lg appearance-none focus:shadow-outline" onChange={this.handleChange}>
                <option value="C">Celcius</option>
                <option value="F">Faranheit</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetUnits;
