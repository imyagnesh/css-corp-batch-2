import React, { createContext, createRef, PureComponent } from "react";

const TodoContext = createContext();

export const TodoConsumer = TodoContext.Consumer;

export class TodoProvider extends PureComponent {

  baseURL = 'http://localhost:3000/todo-list';
  state = {
    list: [],
    filterType: null,
    httpStatus: []
  }
  inputText = createRef();

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
    debugger;
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
      this.setState(({ list }) => ({ list: [...list.map(x => x.id === item.id ? json : x)] }));
      this.setSuccessHttpStatus({ type, id: item.id });
    } catch (error) {
      this.setFailedHttpStatus({ type, id: item.id, payload: error });
    }
  }

  async componentDidMount() {
    console.log('TODO CONTEXT DID MOUNT');
    this.fetchTodo('all');
  }

  render() {
    const { children } = this.props;
    const { list, filterType, httpStatus } = this.state;
    const { fetchTodoStatus, addTodoStatus, modifyTodoStatus } = httpStatus.reduce((p, c) => {
      if (c.type === 'FETCH_TODO') return { ...p, fetchTodoStatus: c }
      if (c.type === 'ADD_TODO') return { ...p, addTodoStatus: c }
      return { ...p, modifyTodoStatus: [...p.modifyTodoStatus, c] }
    }, { modifyTodoStatus: [] });

    return (
      <TodoContext.Provider value={{
        inputText: this.inputText,
        filterType: filterType,
        list,
        fetchTodoStatus,
        fetchTodo: this.fetchTodo,
        addTodo: this.addTodo,
        addTodoStatus,
        removeTodo: this.removeTodo,
        updateTodo: this.updateTodo,
        modifyTodoStatus: modifyTodoStatus,
      }}>
        {children}
      </TodoContext.Provider>
    )
  }
}