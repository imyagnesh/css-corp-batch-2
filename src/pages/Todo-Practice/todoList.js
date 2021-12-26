import React, { lazy, memo, Suspense } from 'react'
import { TodoConsumer } from '../../context/todoContext';

const TodoItem = lazy(() => import('./todoItem'));

const TodoList = () => {
    console.log('TodoList');
    return (
        <div className="max-h-[50vh] overflow-auto pr-2">
            <TodoConsumer>
                {({ list }) => {
                    if (list.length <= 0) return <h1>No data exist</h1>;
                    return (
                        list.map((item) => {
                            const { id } = item;
                            return (
                                <Suspense key={id} fallback={<h1>{id}. TodoItem Loading...</h1>}>
                                    <TodoItem key={id} item={item} />
                                </Suspense>
                            )
                        })
                    )
                }}
            </TodoConsumer>
        </div>
    );
}

export default memo(TodoList);