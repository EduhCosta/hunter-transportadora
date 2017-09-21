import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing, Components, Screens } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Screens
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
