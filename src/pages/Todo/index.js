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

  addTodo = async (event) => {
    event.preventDefault();
    // const format = await ;
    const format = await import('date-fns/format');
    this.setState(
      ({ todoList }) => {
        // const todoText = document.getElementById('todoText').value;
        // O(1)
        const todoText = this.inputText.current.value;

        return {
          todoList: [
            ...todoList,
            {
              id: new Date().valueOf(),
              text: todoText,
              isDone: false,
              timeStamp: format.default(new Date(), 'MM-dd-yy hh:mm'),
            },
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