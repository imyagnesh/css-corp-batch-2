/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, PureComponent } from 'react';

const TodoContext = createContext();

export const TodoConsumer = TodoContext.Consumer;

export class TodoProvider extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
    httpStatus: [],
  };

  async componentDidMount() {
    this.loadTodo('all');
  }

  setRequestStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex((x) => x.type === type && x.id === id);
      const data = { type, status: 'REQUEST', id };
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

  setSuccessStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.filter((x) => !(x.type === type && x.id === id)),
    }));
  };

  setFailStatus = ({ type, payload, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.map((x) => {
        if (x.type === type && x.id === id) {
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

  addTodo = async (event, todoText) => {
    const type = 'ADD_TODO';
    try {
      this.setRequestStatus({ type });
      event.preventDefault();
      const format = await import('date-fns/format');
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
          //   this.inputText.current.value = '';
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
      this.setRequestStatus({ type, id: item.id });
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
      this.setSuccessStatus({ type, id: item.id });
    } catch (error) {
      this.setFailStatus({ type, payload: error, id: item.id });
    }
  };

  deleteTodo = async (item) => {
    const type = 'DELETE_TODO';
    try {
      this.setRequestStatus({ type, id: item.id });
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => ({
        todoList: todoList.filter((x) => x.id !== item.id),
      }));
      this.setSuccessStatus({ type, id: item.id });
    } catch (error) {
      this.setFailStatus({ type, payload: error, id: item.id });
    }
  };

  render() {
    const { children } = this.props;
    const { todoList, filterType, httpStatus } = this.state;

    return (
      <TodoContext.Provider
        value={{
          todoList,
          filterType,
          loadTodoStatus: httpStatus.find((x) => x.type === 'LOAD_TODO'),
          addTodoStatus: httpStatus.find((x) => x.type === 'ADD_TODO'),
          updateTodoStatus: (status, id) => httpStatus.find(
              (x) => x.type === 'UPDATE_TODO' && x.status === status && x.id === id,
            ),
          deleteTodoStatus: (status, id) => httpStatus.find(
              (x) => x.type === 'DELETE_TODO' && x.status === status && x.id === id,
            ),
          loadTodo: this.loadTodo,
          addTodo: this.addTodo,
          toggleComplete: this.toggleComplete,
          deleteTodo: this.deleteTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
}
