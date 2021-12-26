import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';
import { TodoConsumer } from '../../context/todoContext';

const TodoItem = ({ item }) => {
    console.log('TodoItem');
    return (
        <div className="flex flex-row items-center mb-2">
            <TodoConsumer>
                {({ modifyTodoStatus, updateTodo }) => {
                    const hasUpdateTodo = modifyTodoStatus.some(x => x.type === 'UPDATE_TODO' && x.status === 'REQUEST' && x.id === item.id);
                    return <input className={cn("w-[20px] h-[20px]", { "focus:ring-slate-500": hasUpdateTodo })} type="checkbox"
                        disabled={hasUpdateTodo} checked={item.isDone} onChange={() => updateTodo(item)} />
                }}
            </TodoConsumer>

            <p className={cn("flex-1 ml-2", { 'line-through': item.isDone })}>{item.text}</p>
            <TodoConsumer>
                {({ modifyTodoStatus, removeTodo }) => {
                    const hasRemoveTodo = modifyTodoStatus.some(x => x.type === 'REMOVE_TODO' && x.status === 'REQUEST' && x.id === item.id);
                    return <button type="button" disabled={hasRemoveTodo} onClick={() => removeTodo(item)}
                        className={cn("flex justify-center py-2 px-4 ml-2 border shadow-lg shadow-red-600/150 border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", {
                            "bg-slate-600 text-white pointer-none hover:bg-slate-700 focus:ring-0 focus:ring-offset-0 focus:ring-slate-500": hasRemoveTodo
                        })}>
                        {hasRemoveTodo
                            ? <span>Removing</span>
                            : <span>Remove</span>
                        }
                    </button>
                }}
            </TodoConsumer>

        </div>
    );
}

TodoItem.prototype = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })
}

export default memo(TodoItem);