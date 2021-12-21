import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';

const FilterButton = ({ fetchTodo, httpStatus, filter, isActive }) => {
    console.log('TodoFilterButton');
    return (
        <button className={cn("flex-1 py-2 border-2 border-solid first-letter:uppercase", {
            "bg-red-600 text-white border-red-600": isActive,
            "bg-slate-600 border-slate-600": (isActive && httpStatus?.status === 'REQUEST')
        })}
            disabled={httpStatus?.status === 'REQUEST'}
            type="button" onClick={() => fetchTodo(filter)}>
            {(isActive && httpStatus?.status === 'REQUEST')
                ? <span>Loading...</span>
                : filter
            }
        </button>
    )
}

FilterButton.prototype = {
    fetchTodo: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    httpStatus: PropTypes.shape({
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })
}

export default memo(FilterButton);