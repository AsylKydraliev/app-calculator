import { createAction, props } from '@ngrx/store';

export const addSymbol = createAction('[Calculator] AddSymbol', props<{symbol: string}>());
export const result = createAction('[Calculator] Result');
export const reset = createAction('[Calculator] Reset');
