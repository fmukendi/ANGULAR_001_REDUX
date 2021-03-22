import { NgRedux, select } from "ng2-redux";
import { Component } from "@angular/core";
import { Map } from "immutable";

import { IAppState, rootReducer } from "./store";
import { INCREMENT, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app works!";
  // counter = 0;
  //@select() counter;
  @select("counter") count;
  // @select(["counter"]) count;
  // @select(["messaging", "newMessages"]) newMessages;
  // // messaging.newMessages
  // @select((s:IAppState) => s.counter) count;
  @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;
  // @select("counter") count; // state.get('count') // update on it online
  // @select((s) => s.get("counter")) count;
  // @select((s) => s.get("messaging").get("newMessages")) newMessages;
  // @select((s) => s.get("messaging").get("newMessages")) newMessagesCount;

  @select() todos;

  //  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  constructor(private ngRedux: NgRedux<IAppState>) {
    // problem below is that you'll have to unsubscribe
    // no need if you use an async pipe with,
    // and with select, no need for code below
    // var subscription = ngRedux.subscribe(()=> {
    //    // console.log(ngRedux.getState());
    //    var store = ngRedux.getState();
    //    this.counter = store.counter;
    // })
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  addTodo(input) {
    console.log(input);
    if (!input.value) return;

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = "";
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
