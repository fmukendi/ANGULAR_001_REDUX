import { INCREMENT } from "./action";
import { tassign } from "tassign";

export interface IAppState {
  counter: number;
  messaging?: {
    newMessages: number;
  };
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  messaging: {
    newMessages: 5,
  },
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
    // return { counter: state.counter + 1};
    // return Object.assign({}, state, { counter: state.counter + 1})
    // return Object.assign({}, state, { counter: state.counter + 1, bugProp: 1}) // bad !!!
    // state.counter++; // bad !!! Do not change state as well
    return tassign( state, { counter: state.counter + 1}); // tassign protect proprety

    default:
      break;
  }
  return state;
}
