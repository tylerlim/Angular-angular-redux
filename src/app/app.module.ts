import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store'; // <- New

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule, // <- New
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
