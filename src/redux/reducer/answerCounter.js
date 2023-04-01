import {createAction, createReducer} from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add');
export const toggleTodo = createAction('todos/toggle');
const initialState = [];

export const answerCounter = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      // This push() operation gets translated into the same
      // extended-array creation as in the previous example.
      const todo = action.payload;
      state.push(todo);
    })
    .addCase(toggleTodo, (state, action) => {
      // The "mutating" version of this case reducer is much
      //  more direct than the explicitly pure one.

      const index = action.payload.quizId;
      const todo = state[index];
      todo.answerId = action.payload.answerId;
    });
});
