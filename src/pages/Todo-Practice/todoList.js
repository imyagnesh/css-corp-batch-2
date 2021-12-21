import React, { lazy, memo, Suspense } from 'react'
import PropTypes from 'prop-types'

const TodoItem = lazy(() => import('./todoItem'));

const TodoList = ({ list, updateTodo, removeTodo, httpStatus }) => {
    console.log('TodoList');
    return (
        <div className="max-h-[50vh] overflow-auto pr-2">
            {list.length &&
                list.map((item) => {
                    return (
                        <Suspense key={item.id} fallback={<h1>{item.id}. TodoItem Loading...</h1>}>
                            <TodoItem key={item.id} item={item} httpStatus={httpStatus} updateTodo={updateTodo} removeTodo={removeTodo} />
                        </Suspense>
                    )
                })
            }
        </div>
    );
}

TodoList.prototype = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isDone: PropTypes.bool.isRequired
        })
    ).isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    httpStatus: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        })
    )
}

export default memo(TodoList);