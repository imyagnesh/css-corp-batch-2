import React from 'react'

const SearchResults = ({ cities, getWeather, invalidCity }) => {

    return (
        <div className="search-results">
            {invalidCity ?
                <div> {invalidCity} not found!!!!</div>
                :
                <div>
                    {cities?.map(city => {
                        return <button className="search-option" key={city.id} onClick={() => getWeather(city.id)}>{city.name}</button>
                    })}
                </div>
            }
        </div>
    )
}


export default SearchResults;