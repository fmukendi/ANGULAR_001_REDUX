import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgRedux, NgReduxModule, DevToolsExtension } from "ng2-redux";
// import { fromJS, Map } from "immutable"; // a lot of issues with this library

import { IAppState, rootReducer, INITIAL_STATE } from "./store";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    // ngRedux: NgRedux<Map<string, any>>,
    ngRedux: NgRedux<IAppState>,
    devtools: DevToolsExtension
  ) {
    // fromJS return an immutable ojbect
    // we do this to make sure that we do not change the state

    var enhancers = isDevMode ? [devtools.enhancer()] : [];

    // ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), [], enhancers);

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
