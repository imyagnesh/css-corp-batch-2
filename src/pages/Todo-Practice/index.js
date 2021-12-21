import React, { lazy, createRef, PureComponent, Suspense } from 'react';

const TodoForm = lazy(() => import('./todoForm'));
const TodoList = lazy(() => import('./todoList'));
const TodoFilter = lazy(() => import('./todoFilter'));

class ToDoPractice extends PureComponent {
  constructor(props) {
    super(props)
    this.baseURL = 'http://localhost:3000/todo-list';
    this.state = {
      list: [],
      filterType: null,
      httpStatus: []
    }
    this.inputText = createRef();
  }

  setRequestHttpStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex(x => x.type === type && x.id === id);
      const data = { type: type, status: 'REQUEST', id };

      if (index === -1) {
        return { httpStatus: [...httpStatus, data] }
      }
      return [...httpStatus.slice(0, index), data, ...httpStatus.slice(index + 1)];
    });
  }

  setSuccessHttpStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: [...httpStatus].filter(x => x.type !== type && x.id === id)
    }));
  }

  setFailedHttpStatus = ({ type, id = -1, payload }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex(x => x.type === type && x.id === id);
      const data = { type, status: 'FAILED', id, payload };
      return {
        httpStatus: [...httpStatus.slice(0, index), data, ...httpStatus.slice(index + 1)]
      }
    });
  }

  fetchTodo = async (filterType) => {
    const type = 'FETCH_TODO';
    try {
      if (filterType === this.state.filterType) return;
      this.setRequestHttpStatus({ type });

      this.setState(({ httpStatus }) => ({
        httpStatus: [...httpStatus, { type: type, status: 'REQUEST' }]
      }));

      let filterURL = (filterType === 'all') ? this.baseURL : `${this.baseURL}/?isDone=${filterType === 'completed'}`;
      const res = await fetch(filterURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
      });
      const json = await res.json();

      this.setState({ list: json, filterType });
      this.setSuccessHttpStatus({ type });
    } catch (error) {
      this.setFailedHttpStatus({ type, error })
    }
  }

  addTodo = async (e) => {
    e.preventDefault();
    const type = 'ADD_TODO';
    try {
      this.setRequestHttpStatus({ type });
      const text = this.inputText.current.value;
      const res = await fetch(this.baseURL, {
        method: 'POST',
        body: JSON.stringify({ text: text, isDone: false }),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState(({ list }) => ({ list: [...list, json] }), () => { this.inputText.current.value = '' });
      this.setSuccessHttpStatus({ type });
    } catch (error) {
      this.setFailedHttpStatus({ type, error });
    }
  }

  removeTodo = async (item) => {
    const type = 'REMOVE_TODO';
    try {
      this.setRequestHttpStatus({ type, id: item.id });
      const res = await fetch(this.baseURL + `/${item.id}`, {
        method: 'DELETE',
      });
      this.setState(({ list }) => ({ list: [...list.filter(x => x.id !== item.id)] }));
      this.setSuccessHttpStatus({ type, id: item.id });
    } catch (error) {
      this.setFailedHttpStatus({ type, id: item.id, payload: error });
    }
  }

  updateTodo = async (item) => {
    const type = 'UPDATE_TODO';
    try {
      this.setRequestHttpStatus({ type, id: item.id });
      const res = await fetch(this.baseURL + `/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...item, isDone: !item.isDone
        }),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });

      const json = await res.json();

      this.setState(({ list }) => ({
        list: [...list.map(x => {
          if (x.id === item.id)
            return json;
          return x;
        })]
      }));
      this.setSuccessHttpStatus({ type, id: item.id });
    } catch (error) {
      this.setFailedHttpStatus({ type, id: item.id, payload: error });
    }
  }

  async componentDidMount() {
    this.fetchTodo('all');
  }

  render() {
    console.log('Todo Practice');

    const { list, filterType, httpStatus } = this.state;
    const { fetchTodoStatus, addTodoStatus, modifyTodoStatus } = httpStatus.reduce((p, c) => {
      if (c.type === 'FETCH_TODO') return { ...p, fetchTodoStatus: c }
      if (c.type === 'ADD_TODO') return { ...p, addTodoStatus: c }
      return { ...p, modifyTodoStatus: [...p.modifyTodoStatus, c] }
    }, { modifyTodoStatus: [] });
    console.log(fetchTodoStatus, addTodoStatus, modifyTodoStatus);

    return (
      <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col items-center justify-start">
        <div className="w-[90vw] mt-4 flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-xl sm:max-w-[50%]">
          <h3 className="text-center text-red-600 text-2xl font-bold">My Todo App</h3>
          <div className="mt-4">
            <Suspense fallback={<h1>Todo Form is loading...</h1>}>
              <TodoForm addTodo={this.addTodo} ref={this.inputText} httpStatus={addTodoStatus} />
            </Suspense>
          </div>
        </div>
        <div className="w-[90vw] mt-2 mb-4 items-center justify-center p-5 bg-white rounded-md shadow-xl sm:max-w-[50%]">
          <Suspense fallback={<h1>Todo Filter is loading...</h1>}>
            <TodoFilter httpStatus={fetchTodoStatus} fetchTodo={this.fetchTodo} filterType={filterType} />
          </Suspense>
          {list?.length > 0
            ?
            <Suspense fallback={<h1>Todo list is loading... </h1>} >
              <TodoList list={list} removeTodo={this.removeTodo} httpStatus={modifyTodoStatus} updateTodo={this.updateTodo} />
            </Suspense>
            : <>
              {fetchTodoStatus?.status === 'REQUEST' &&
                <h1>Todo List is loading...</h1>
              }
              {fetchTodoStatus?.status === 'FAILED' &&
                <div>
                  <h1>{fetchTodoStatus.payload.message}</h1>
                  <button type="button" onClick={this.fetchTodo}>Retry</button>
                </div>
              }
              {!fetchTodoStatus && 'No todo exists!'}
            </>
          }
        </div>
      </div>
    )
  }
}

export default ToDoPractice;