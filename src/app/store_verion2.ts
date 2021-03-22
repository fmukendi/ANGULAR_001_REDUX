// import { Map } from "immutable"; // a lot of issue with this library

// import { INCREMENT, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./action";
// import { tassign } from "tassign";

// export interface IAppState {
//   counter: number;
//   todos: any[];
//   lastUpdate: Date;
//   messaging?: {
//     newMessages: number;
//   };
// }

// export const INITIAL_STATE: IAppState = {
//   counter: 0,
//   todos: [],
//   lastUpdate: null,
//   messaging: {
//     newMessages: 5,
//   },
// };

// export function rootReducer(state: Map<string, any>, action): Map<string, any> {
//   // export function rootReducer(state: IAppState, action): IAppState {
//   switch (action.type) {
//     case INCREMENT:
//       // return { counter: state.counter + 1};
//       // return Object.assign({}, state, { counter: state.counter + 1})
//       // return Object.assign({}, state, { counter: state.counter + 1, bugProp: 1}) // bad !!!
//       // state.counter++; // bad !!! Do not change state as well
//       // return tassign(state, { counter: state.counter + 1 }); // tassign protect proprety
//       // choose between immutable objects and Maps
//       return state.set("counter", state.get("counter") + 1);

//     case ADD_TODO:
//       return state.set("todo", state.get("todo").get("todolist").push("hello"));

//     default:
//       break;
//   }
//   return state;
// }
