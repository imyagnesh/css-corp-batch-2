import React, { memo } from 'react'

const WeatherForm = ({ checkWeather, inputText }) => {
    return (
        <div className='form-container'>
            <h1 className="text-center my-2 text-lg font-bold">Weather Report</h1>
            <form className="flex justify-center my-2" onSubmit={checkWeather}>
                <input type="text" className="form-input" ref={inputText} />
                <button type="submit" className="btn-primary">
                    Check
                </button>
            </form>
        </div>

    )
}

export default memo(WeatherForm);