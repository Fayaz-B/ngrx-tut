import { increment, decrement, reset, customIncrement, changeAppName } from './counter.actions';
import { CounterState, initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action)
    return {
      ...state, 
      counter: state.counter + action.value
    }
  }),
  on(changeAppName, (state, action) => {
    return {
      ...state,
      name: action.name
    }
  })
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}