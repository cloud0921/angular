import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { AuthGuard } from './auth.guard';
import { RouterModule,Routes} from '@angular/router'; //라우터
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


const fireEnvironment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyC2UDNn-LdW75DWZLwsM0yf99a7Dowq-Ag",
    authDomain: "newmyproject-14680.firebaseapp.com",
    projectId: "newmyproject-14680",
    storageBucket: "newmyproject-14680.appspot.com",
    messagingSenderId: "1007870971881",
    appId: "1:1007870971881:web:01550b760bdd4ed91d8578",
    measurementId: "G-9SDT9R9BJF"
  }
}
const router : Routes = [  //라우팅
  {path : 'login' , component : LoginComponent},  
  {path : 'board' , component : BoardComponent, canActivate:[AuthGuard]},  //가드 추가
  {path : '', redirectTo : '/login',  pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false, useHash: true}),
    FormsModule,
    AngularFireModule.initializeApp(fireEnvironment.firebase, '/'),   //파이어 베이스 모듈 사용
    AngularFirestoreModule,  //파이어베이스 데이터베이스와 관련된 모듈 사용
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }