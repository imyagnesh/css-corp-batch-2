import React, { memo, forwardRef } from 'react'
import propTypes from 'prop-types';



const Input = forwardRef(({ inputText, checked, handleOnUnitChange, searchCity }, ref) => {
    console.log('input  render')

    return (
        <div>
            <div className="flex space-x-4">
                <div className="flex-row items-center p-6 space-x-6 bg-white rounded-lg shadow-lg w-3/4  ">

                    <div className="md:flex-1 md:pr-3">
                        <label className=" uppercase  text-xl font-bold">Location</label>
                        <input className="w-full  p-4 outline-none" type="text" name="location" ref={ref} onChange={(e) => searchCity(e)}
                        />
                    </div>
                </div>

                {/* starts here */}
                <div className="flex-row items-center p-6 space-x-6 bg-white rounded-xl shadow-lg w-1/4 ">
                    <div className="md:flex-1 md:pr-3">
                        <label className=" uppercase  text-xl font-bold">UNITS</label>
                        <label className="flex justify-between items-center p-2 text-xl">
                            {checked ? 'Celsius' : 'Fahrenheit'}
                            <input type="checkbox" onChange={handleOnUnitChange} checked={checked} />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg> */}
                        </label>

                    </div>


                </div>

            </div>

        </div>
    )
}
)
Input.propTypes = {
    //     inputText: PropTypes.shape({
    //         current: PropTypes.element,
    //     }).isRequired,
    handleOnUnitChange: propTypes.func.isRequired,
    checked: propTypes.bool.isRequired,
    searchCity: propTypes.func.isRequired,
    //filteredCity: propTypes.array.isRequired
};

export default memo(Input);
