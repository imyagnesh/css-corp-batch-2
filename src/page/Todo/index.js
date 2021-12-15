import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './todoStyle.css';

const test = () => {};
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
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
      todoList: todoList.filter((x) => x.id !== item.id),
    }));
  };

  filterTodo = (filterType) => {
    this.setState({
      filterType,
    });
  };

  render() {
    console.log('render');
    const { todoList, filterType } = this.state;
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
          {todoList.reduce((p, c) => {
            const UI = (
              <div className="flex items-center m-2" key={c.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={c.isDone}
                  onChange={() => this.toggleComplete(c)}
                />
                <p
                  className={cn('flex-1 px-2', {
                    'line-through': c.isDone,
                  })}
                >
                  {c.text}
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => this.deleteTodo(c)}
                >
                  Delete
                </button>
              </div>
            );
            switch (filterType) {
              case 'pending':
                if (!c.isDone) {
                  return [...p, UI];
                }
                break;

              case 'completed':
                if (c.isDone) {
                  return [...p, UI];
                }
                break;

              default:
                return [...p, UI];
            }
            return p;
          }, [])}
        </div>
        <div className="flex">
          <button
            type="button"
            className="flex-1"
            onClick={() => this.filterTodo('all')}
          >
            All
          </button>
          <button
            type="button"
            className="flex-1"
            onClick={() => this.filterTodo('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="flex-1"
            onClick={() => this.filterTodo('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}