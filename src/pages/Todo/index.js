import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import { TodoConsumer } from '../../context/todoContext';
import './todoStyle.css';

const TodoForm = lazy(() => import('./todoForm'));
const TodoList = lazy(() => import('./todoList'));
const TodoFilter = lazy(() => import('./todoFilter'));

export default class Todo extends PureComponent {
  inputText = createRef();

  async componentDidMount() {
    this.loadTodo('all');
  }

  render() {
    // const {loadTodoStatus, addTodoStatus,updateOrDeleteTodoStatus } = httpStatus.reduce()
    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Todo App</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoForm ref={this.inputText} />
        </Suspense>

        {/* {loadTodoStatus?.status === 'REQUEST' && (
          <h1 className="text-center text-red-500">Loading...</h1>
        )}
        {loadTodoStatus?.status === 'FAIL' && (
          <div className="flex justify-center items-center flex-1, flex-col">
            <h1 className=" text-red-500">{loadTodoStatus.payload.message}</h1>
            <button type="button" onClick={() => this.loadTodo('all')}>
              Retry
            </button>
          </div>
        )} */}
        <div className="flex-1">
          <TodoConsumer>
            {({ todoList }) => (
              <>
                {todoList.length > 0 && (
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <TodoList todoList={todoList} />
                  </Suspense>
                )}
              </>
            )}
          </TodoConsumer>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoFilter />
        </Suspense>
      </div>
    );
  }
}
