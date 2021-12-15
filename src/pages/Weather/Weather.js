import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [
                { id: 1, city: 'Chennai', temperature: 40 },
                { id: 2, city: 'Mumbai', temperature: 72 },
                { id: 3, city: 'Punjab', temperature: 36 },
                { id: 4, city: 'Delhi', temperature: 62 },
                { id: 5, city: 'Bangalore', temperature: 53 },
            ],
            fetchedReport: null
        }
        this.textBox = React.createRef();
    }

    getWeather = (event) => {
        event.preventDefault();
        this.setState(({ reports }) => {
            const city = this.textBox.current;
            var fetchedReport = reports.find(report => report.city.toLowerCase() === city.value.toLowerCase());
            fetchedReport = (!fetchedReport) ? city.value : fetchedReport;
            city.value = '';
            return { ...reports, fetchedReport }
        });
    }

    render() {
        const { fetchedReport } = this.state;

        return (
            <div className="w-full h-full absolute bg-slate-100 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-10 bg-white rounded-md shadow-xl">
                    <h3 className="text-center text-indigo-600 text-2xl font-bold">Weather Check App</h3>
                    <div>
                        <form className="mt-8 space-y-6 flex" onSubmit={this.getWeather}>
                            <div className="">
                                <div>
                                    <input ref={this.textBox} type="text" required className="rounded-none px-3 py-2 mb-4 w-full border text-center border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" placeholder="Enter the city name" />
                                </div>
                                <div>
                                    <button type="submit" className="flex w-full justify-center py-2 px-4 border shadow-lg shadow-indigo-600/150 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Check
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-2xl">
                        {fetchedReport?.city
                            ? <div className="mt-10">
                                <span className="underline decoration-indigo-600">{fetchedReport?.city}</span>'s
                                temporature is <span className="text-3xl font-bold">{fetchedReport.temperature}<span className="text-indigo-600">&#8451;</span></span>
                            </div>
                            : <div>{fetchedReport
                                && <div className="mt-10">
                                    <span className="underline decoration-indigo-600">{fetchedReport}</span> is not found in the record!
                                </div>}
                            </div>
                        }
                    </div>
                </div>
            </div >
        )
    }
}