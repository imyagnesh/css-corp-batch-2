import React, {
  useRef,
  lazy,
  useEffect,
  useReducer,
  useCallback,
  useState,
} from 'react';
import { todoInitialValues, todoReducer } from '../../reducers/todoReducer';
import TodoForm from './todoForm';
// import { TodoConsumer } from '../../context/todoContext';
import './todoStyle.css';

// const TodoForm = lazy(() => import('./todoForm'));
const TodoList = lazy(() => import('./todoList'));
const TodoFilter = lazy(() => import('./todoFilter'));

// 10 * 2 => 2

const Todo = () => {
  const inputText = useRef();

  const [httpStatus, setHttpStatus] = useState([]);

  const [{ todoList, filterType }, dispatch] = useReducer(
    todoReducer,
    todoInitialValues,
  );

  const setRequestStatus = ({ type, id = -1 }) => {
    setHttpStatus((val) => {
      const index = val.findIndex((x) => x.type === type && x.id === id);
      const data = { type, status: 'REQUEST', id };
      if (index === -1) {
        return [...val, data];
      }
      return [...val.slice(0, index), data, ...val.slice(index + 1)];
    });
  };

  const setSuccessStatus = ({ type, id = -1 }) => {
    setHttpStatus((val) =>
      val.filter((x) => !(x.type === type && x.id === id)),
    );
  };

  const setFailStatus = ({ type, payload, id = -1 }) => {
    setHttpStatus((val) =>
      val.map((x) => {
        if (x.type === type && x.id === id) {
          return { ...x, status: 'FAIL', payload };
        }
        return x;
      }),
    );
  };

  const loadTodo = useCallback(
    async (ft) => {
      const type = 'LOAD_TODO';
      try {
        setRequestStatus({ type });
        let url = 'http://localhost:3000/todo-list';
        if (ft !== 'all') {
          url = `${url}?isDone=${ft === 'completed'}`;
        }
        const res = await fetch(url);
        const json = await res.json();

        dispatch({
          type: 'LOAD_TODO_SUCCESS',
          payload: {
            todoList: json,
            filterType: ft,
          },
        });
        setSuccessStatus({ type });
      } catch (error) {
        setFailStatus({ type, payload: error });
      }
    },
    [setRequestStatus],
  );

  useEffect(() => {
    loadTodo('all');
  }, [loadTodo]);

  const addTodo = useCallback(async (event, todoText) => {
    const type = 'ADD_TODO';
    try {
      setRequestStatus({ type });
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

      dispatch({
        type: 'ADD_TODO_SUCCESS',
        payload: json,
      });

      setSuccessStatus({ type });
    } catch (error) {
      setFailStatus({ type, payload: error });
    }
  }, []);

  // const xyz = 2;

  return (
    <div className="bg-[#FAFAFA] h-screen flex flex-col">
      <h1 className="text-center my-2 text-lg font-bold">Todo App</h1>
      <TodoForm ref={inputText} addTodo={addTodo} addTodoStatus={undefined} />

      {/* <div className="flex-1">
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
      </Suspense> */}
    </div>
  );
};

export default Todo;
