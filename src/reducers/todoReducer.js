export const todoInitialValues = {
  todoList: [],
  httpStatus: [],
  filterType: 'all',
};

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_SUCCESS':
      return {
        ...state,
        todoList: payload.todoList,
        filterType: payload.filterType,
      };

    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    default:
      return state;
  }
};
