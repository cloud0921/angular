import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';  //폼즈모듈을 가져옵니다!

import { ReactiveFormsModule } from '@angular/forms';  //반응형 폼?
import { MyServiceService } from './my-service.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyServiceService], // 사용값을 제공
  bootstrap: [AppComponent]
})
export class AppModule { }
