import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import './todoStyle.css';

const TodoForm = lazy(() => import('./todoForm'));
const TodoList = lazy(() => import('./todoList'));
const TodoFilter = lazy(() => import('./todoFilter'));

export default class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
      httpStatus: [],
    };

    this.inputText = createRef();
  }

  async componentDidMount() {
    this.loadTodo('all');
  }

  setRequestStatus = ({ type }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex((x) => x.type === type);
      const data = { type, status: 'REQUEST' };
      if (index === -1) {
        return {
          httpStatus: [...httpStatus, data],
        };
      }
      return {
        httpStatus: [
          ...httpStatus.slice(0, index),
          data,
          ...httpStatus.slice(index + 1),
        ],
      };
    });
  };

  setSuccessStatus = ({ type }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.filter((x) => x.type !== type),
    }));
  };

  setFailStatus = ({ type, payload }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.map((x) => {
        if (x.type === type) {
          return { ...x, status: 'FAIL', payload };
        }
        return x;
      }),
    }));
  };

  loadTodo = async (filterType) => {
    const type = 'LOAD_TODO';
    try {
      this.setRequestStatus({ type });
      let url = 'http://localhost:3000/todo-list';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      this.setState({
        todoList: json,
        filterType,
      });
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };
  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = this.state.todoList.indexOf(item);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)]
      }
    });
  };

  addTodo = async (event) => {
    const type = 'ADD_TODO';
    try {
      this.setRequestStatus({ type });
      event.preventDefault();
      const format = await import('date-fns/format');
      const todoText = this.inputText.current.value;
      const res = await fetch('http://localhost:3000/todo-list', {
        method: 'POST',
        body: JSON.stringify({
          text: todoText,
          isDone: false,
          timeStamp: format.default(new Date(), 'MM-dd-yy hh:mm'),
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();
      // throw new Error('Unable to add record...');

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          // document.getElementById('todoText').value = '';
          this.inputText.current.value = '';
        },
      );
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };

  toggleComplete = async (item) => {
    const type = 'UPDATE_TODO';
    try {
      this.setRequestStatus({ type });
      const res = await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...item,
          isDone: !item.isDone,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => ({
        todoList: todoList.map((x) => {
          if (x.id === item.id) {
            return json;
          }
          return x;
        }),
      }));
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };

  deleteTodo = async (item) => {
    try {
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => ({
        todoList: todoList.filter((x) => x.id !== item.id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { todoList, filterType, httpStatus } = this.state;
    // O(3logN)
    // O(N)
    const loadTodoStatus = httpStatus.find((x) => x.type === 'LOAD_TODO');
    const addTodoStatus = httpStatus.find((x) => x.type === 'ADD_TODO');
    const updateTodoStatus = httpStatus.find((x) => x.type === 'UPDATE_TODO');
    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Todo App</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoForm
            addTodo={this.addTodo}
            ref={this.inputText}
            httpStatus={addTodoStatus}
          />
        </Suspense>
        {loadTodoStatus?.status === 'REQUEST' && (
          <h1 className="text-center text-red-500">Loading...</h1>
        )}
        {loadTodoStatus?.status === 'FAIL' && (
          <div className="flex justify-center items-center flex-1, flex-col">
            <h1 className=" text-red-500">{loadTodoStatus.payload.message}</h1>
            <button type="button" onClick={() => this.loadTodo('all')}>
              Retry
            </button>
          </div>
        )}
        <div className="flex-1">
          {todoList.length > 0 && (
            <Suspense fallback={<h1>Loading...</h1>}>
              <TodoList
                todoList={todoList}
                filterType={filterType}
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
                httpStatus={updateTodoStatus}
              />
            </Suspense>
          )}
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoFilter filterTodo={this.loadTodo} filterType={filterType} />
        </Suspense>
      </div>
    );
  }
}
