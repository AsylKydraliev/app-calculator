import { createAction, props } from '@ngrx/store';

export const addSymbol = createAction('[Calculator] AddSymbol', props<{symbol: string}>());
export const result = createAction('[Calculator] Result', props<{symbol: string}>());
export const reset = createAction('[Calculator] Reset', props<{symbol: string}>());
