import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';

import * as AOS from 'aos';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
