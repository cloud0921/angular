import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Routing2Module } from './routing2/routing2.module';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Routing2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
