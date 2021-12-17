import React, { memo } from 'react'

const weatherReport = ({ report }) => {
    return (
        <div>
            {report.temp ? (
                < p className='text-center' > Temp in <span className='font-bold'>{report.cityName}</span> is < span className='font-bold' > {report.temp}</span ></p >
            ) : (
                < p className='text-center' > No data available for <span className='font-bold'>{report.cityName}</span></p >
            )}

        </div>
    )
}

export default memo(weatherReport);