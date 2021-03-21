import { NgRedux, select } from "ng2-redux";
import { Component } from "@angular/core";

import { IAppState, rootReducer } from "./store";
import { INCREMENT } from "./action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app works!";
  // counter = 0;
  // @select() counter;
  @select('counter') count;
  @select(['messaging', 'newMessages']) newMessages;
  // messaging.newMessages
  @select((s: IAppState)=> s.messaging.newMessages) newMessagesCount;

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
}
