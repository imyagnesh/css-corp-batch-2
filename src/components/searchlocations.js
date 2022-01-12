import React from 'react'

class searchlocations extends React.Component {

    constructor(props) {
        super(props)
        this.state = { searchInputValue: "", searchtemperature: "" }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInputValue, this.state.searchtemperature)
    }

    render() {
        return (

            <form className="search-loaction" onSubmit={this.onFormSubmit}>
                <div className="mt-2 flex">
                    <div className="w-2/3">
                        <div className="border-gray-100 rounded border bg-white p-3">
                            <p className="uppercase text-xs font-semibold">Locations</p>
                            <input
                                type="text"
                                name="city"
                                placeholder="What city?"
                                onChange={(event) => this.setState({ searchInputValue: event.target.value })}
                                className="h-8 text-xs border-0 border-white focus-within:border-0 w-full" />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="border-gray-100 rounded border bg-white p-3">
                            <p className="uppercase text-xs font-semibold">Units</p>
                            <select className="h-8 text-xs px-0 w-full" onChange={(event) => this.setState({ searchtemperature: event.target.value })}>
                                <option value="celcius">Celsius</option>
                                <option value="fahrenheit">Fahrenheit</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>




        )
    }
}

export default searchlocations;