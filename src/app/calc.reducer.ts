import { createReducer, on } from '@ngrx/store';
import { addSymbol, reset, result } from './calc.actions';

const initialState = '';

export const calculatorReducer = createReducer(
  initialState,
  on(addSymbol, (state, {symbol}) => {
      return state + symbol;
  }),
  on(result, state => eval(state)),
  on(reset, state => ''),
)

