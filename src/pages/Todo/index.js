import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './todoStyle.css';

const test = () => {};
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };

    this.inputText = createRef();
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => {
        // const todoText = document.getElementById('todoText').value;
        // O(1)
        const todoText = this.inputText.current.value;
        return {
          todoList: [
            ...todoList,
            { id: new Date().valueOf(), text: todoText, isDone: false },
          ],
        };
      },
      () => {
        // document.getElementById('todoText').value = '';
        this.inputText.current.value = '';
      },
    );
  };

  toggleComplete = (item) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((x) => {
        if (x.id === item.id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      }),
    }));
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter((x) => {
        return (x.id !== item.id) 
      }),
    }));
  };

  render() {
    console.log('render');
    const { todoList } = this.state;
    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Todo App</h1>
        <form className="flex justify-center my-2" onSubmit={this.addTodo}>
          <input type="text" className="input" ref={this.inputText} />
          <button type="submit" className="btn-primary">
            Add Todo
          </button>
        </form>
        <div className="flex-1 overflow-auto">
          {todoList.map((item) => (
            <div className="flex items-center m-2" key={item.id}>
              <input
                type="checkbox"
                className="checkbox"
                checked={item.isDone}
                onChange={() => this.toggleComplete(item)}
              />
              <p
                className={cn('flex-1 px-2', {
                  'line-through': item.isDone,
                })}
              >
                {item.text}
              </p>
              <button type="button" className="btn-primary" onClick={() => this.deleteTodo(item)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="flex">
          <button type="button" className="flex-1">
            All
          </button>
          <button type="button" className="flex-1">
            Pending
          </button>
          <button type="button" className="flex-1">
            Completed
          </button>
        </div>
      </div>
    );
  }
}