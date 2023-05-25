import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AlertModule } from './alert/alert.module';
import { FormsModule } from '@angular/forms';
import { HelloworldDirective } from './helloworld.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloworldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
