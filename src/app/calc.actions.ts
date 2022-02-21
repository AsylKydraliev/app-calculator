import { createAction } from '@ngrx/store';

export const addition = createAction('[Calculator] Addition');
export const subtraction = createAction('[Calculator] Subtraction');
export const multiplication = createAction('[Calculator] Multiplication');
export const division = createAction('[Calculator] Division');
export const result = createAction('[Calculator] Result');
export const reset = createAction('[Calculator] Reset');
