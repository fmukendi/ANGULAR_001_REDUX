import { NgRedux } from "ng2-redux";
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
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
