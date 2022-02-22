import { createReducer, on } from '@ngrx/store';
import { addSymbol, reset, result } from './calc.actions';

const initialState = '';

export const calculatorReducer = createReducer(
  initialState,
  on(addSymbol, (state, {symbol}) => {
    if(state === 'error'){
      state = '';
    }
    return state + symbol;
  }),
  on(result, state => {
    let sum = null;
    try{
      sum = eval(state);
    }catch (e){
      return 'error';
    }
    return sum;
  }),
  on(reset, state => ''),
)
