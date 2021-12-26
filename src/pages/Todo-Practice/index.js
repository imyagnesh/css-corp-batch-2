import React, { lazy, createRef, PureComponent, Suspense } from 'react';
import { TodoConsumer } from '../../context/todoContext';

const TodoForm = lazy(() => import('./todoForm'));
const TodoList = lazy(() => import('./todoList'));
const TodoFilter = lazy(() => import('./todoFilter'));

class ToDoPractice extends PureComponent {

  render() {
    console.log('Todo Practice');

    return (
      <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col items-center justify-start">
        <div className="w-[90vw] mt-4 flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-xl sm:max-w-[50%]">
          <h3 className="text-center text-red-600 text-2xl font-bold">My Todo App</h3>
          <div className="mt-4">
            <TodoConsumer>
              {({ inputText }) => {
                return (
                  <Suspense fallback={<h1>Todo Form is loading...</h1>}>
                    <TodoForm ref={inputText} />
                  </Suspense>
                )
              }}
            </TodoConsumer>
          </div>
        </div>
        <div className="w-[90vw] mt-2 mb-4 items-center justify-center p-5 bg-white rounded-md shadow-xl sm:max-w-[50%]">
          <Suspense fallback={<h1>Todo Filter is loading...</h1>}>
            <TodoFilter />
          </Suspense>

          <Suspense fallback={<h1>Todo list is loading... </h1>} >
            <TodoList />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default ToDoPractice;