import { Todo } from "../../types";

const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;
const UPDATE_TODO = "UPDATE_TODO" as const;

export const addTodo = (addedTodo: Todo) => {
  return {
    type: ADD_TODO,
    payload: addedTodo,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (id: string) => {
  return {
    type: UPDATE_TODO,
    payload: id,
  };
};

type CounterAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof updateTodo>;

type CounterState = {
  todos: Todo[];
};

const initialState: CounterState = {
  todos: [],
};

const todoReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
