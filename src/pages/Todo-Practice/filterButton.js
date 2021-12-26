import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';
import { TodoConsumer } from '../../context/todoContext';

const FilterButton = ({ filter }) => {
    console.log('TodoFilterButton');
    return (
        <TodoConsumer>
            {({ filterType, fetchTodo, fetchTodoStatus }) => {
                const isActive = filterType === filter;
                const isHttpsPending = fetchTodoStatus?.status === 'REQUEST';
                return <button className={cn("flex-1 py-2 border-2 border-solid first-letter:uppercase", {
                    "bg-red-600 text-white border-red-600": isActive,
                    "bg-slate-600 border-slate-600": (isActive && isHttpsPending)
                })}
                    disabled={isHttpsPending}
                    type="button" onClick={() => fetchTodo(filter)}>
                    {(isActive && isHttpsPending)
                        ? <span>Loading...</span>
                        : filter
                    }
                </button>
            }}
        </TodoConsumer>
    )
}

FilterButton.prototype = {
    filter: PropTypes.string.isRequired,
}

export default memo(FilterButton);