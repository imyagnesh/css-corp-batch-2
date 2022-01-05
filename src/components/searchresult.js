import React from "react"
const SearchResult = ({ city, invalidcity, getweather }) => {

    return (<div>{
        city.length ? <div className="flex-1 border-2">
            <ul className="flex-1">

                {city.map((x) => {
                    return <li key={x.id} onClick={() => { getweather(x.id) }}>{x.name}</li>
                })}
            </ul>
        </div> : <div>{invalidcity && <div> Mismatch</div>}</div>
    }</div>)
}
export default SearchResult