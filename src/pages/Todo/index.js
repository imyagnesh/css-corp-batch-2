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
    };

    this.inputText = createRef();
  }

  async componentDidMount() {
    this.loadTodo();
  }

  loadTodo = async () => {
    try {
      const res = await fetch('http://localhost:3000/todo-list');
      const json = await res.json();
      this.setState({
        todoList: json,
      });
    } catch (error) {
      console.error(error);
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
    try {
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

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          // document.getElementById('todoText').value = '';
          this.inputText.current.value = '';
        },
      );
    } catch (error) {}
  };

  toggleComplete = async (item) => {
    try {
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
    } catch (error) {}
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoForm addTodo={this.addTodo} ref={this.inputText} />
        </Suspense>
        <div className="flex-1">
          {todoList.length > 0 && (
            <Suspense fallback={<h1>Loading...</h1>}>
              <TodoList
                todoList={todoList}
                filterType={filterType}
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
              />
            </Suspense>
          )}
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoFilter filterTodo={this.filterTodo} />
        </Suspense>
      </div>
    );
  }
}
