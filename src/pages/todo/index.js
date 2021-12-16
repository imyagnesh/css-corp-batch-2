import React, { Component, createRef } from 'react';
import './todoStyle.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityDetails : [{
        id: 1,
        city: 'Ahmedabad',
        temperature: 30
      },
      {
        id: 2,
        city: 'Allahabad',
        temperature: 29
      },
      {
        id: 3,
        city: 'Ahmedabad',
        temperature: 30
      },
      {
        id: 4,
        city: 'Bangalore',
        temperature: 27
      },
      {
        id: 5,
        city: 'Chennai',
        temperature: 33
      },
      {
        id: 6,
        city: 'punjab',
        temperature: 36
      }],
      cityDetailsDisplay: '',
    }
    this.inputText = createRef();
  }
  checkWeather = (event) =>{
      event.preventDefault(); 
      this.setState(({cityDetails}) => { 
        const city = this.inputText.current.value;
        let cityDetailsDisplay = cityDetails.find(report => report.city.toLowerCase() === city.toLowerCase());
        console.log(`city name ${cityDetailsDisplay}`);
        cityDetailsDisplay = (!cityDetailsDisplay) ? city : cityDetailsDisplay;
        console.log(`city name ${cityDetailsDisplay}`);
        return { cityDetailsDisplay }
      });
      
      
  }
  render() {
    const { cityDetailsDisplay } = this.state;
    return (
      <div className="container bg-[#FAFAFA] flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Weather List</h1>
        <form className='flex justify-center' onSubmit={this.checkWeather}>
          <input type='text' className='input-primary mx-2' ref={this.inputText}/>
          <button type='submit' className='btn-primary'>Check Weather</button>
        </form>
        { cityDetailsDisplay?.city ?
        <h1>{cityDetailsDisplay?.city}has recorded the temperature of {cityDetailsDisplay.temperature}</h1>
        :
        <div>{ cityDetailsDisplay && <div><span>{cityDetailsDisplay} </span> not found in the record</div>}</div>
        }
      </div>
    );
  }
}

export default Todo;