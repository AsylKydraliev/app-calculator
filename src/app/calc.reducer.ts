import { createReducer, on } from '@ngrx/store';
import { addSymbol, reset, result } from './calc.actions';


const initialState = {
  result: ''
};

export const calculatorReducer = createReducer(
  initialState,
  on(addSymbol, (state, {symbol}) => {
      return {...state, result: state.result + symbol}
  }),
  on(result, (state, {symbol}) => {
    return {...state, result: eval(state.result)};
  }),
  on(reset, state => {
      return {...state, result: ''};
  })
);
