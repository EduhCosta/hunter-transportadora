import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing, Components, Screens } from './app.routing';

// Plugins
import { TextMaskModule } from 'angular2-text-mask';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Screens
  ],
  imports: [
    BrowserModule,
    routing,
    TextMaskModule,
    Angular2FontawesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
