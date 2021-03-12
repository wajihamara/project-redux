import { ADD_TASK,
DELETE_TASK,
COMPLETE_TASK,
EDIT_TASK,
TOGGLE } from './types'

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const completeTask = (id) => {
    return {
      type: COMPLETE_TASK,
      id,
    };
  };


export const editTask=(id, text)=>{
  return {
    type:EDIT_TASK,
    id, 
    text
  }
}

export const toggle=()=>{
  return {
    type:TOGGLE
  }
}