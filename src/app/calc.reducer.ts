import { createReducer, on } from '@ngrx/store';
import { addition, division, multiplication, reset, result, subtraction } from './calc.actions';

const initialState = 0;

export const calculatorReducer = createReducer(
  initialState,
  on(addition, state => {
    return state + 1;
  }),
  on(subtraction, state => {
    return state - 1;
  }),
  on(multiplication, state => {
    return state * 2;
  }),
  on(division, state => {
    return state / 2;
  }),
  on(result, state => {
    return state;
  }),
  on(reset, state => {
    return 0;
  }),
);
