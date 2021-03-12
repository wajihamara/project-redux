import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  TOGGLE,
} from "../actions/types";

const intialState = {
  list: [],
  show: false
};

const reducerTask = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, list: [...state.list, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.id ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.id ? { ...el, text: action.text } : el
        ),
      };

    case TOGGLE:
      return {...state, show:!state.show}

    default:
      return state;
  }
};

export default reducerTask;