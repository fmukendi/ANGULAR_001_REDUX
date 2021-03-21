import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgRedux, NgReduxModule } from "ng2-redux";
import { fromJS, Map } from "immutable";

import { IAppState, rootReducer, INITIAL_STATE } from "./store";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    // fromJS return an immutable ojbect
    // we do this to make sure that we do not change the state
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
