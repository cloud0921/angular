import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="앵귤러 공부";
  loginBool = true;
  boardBool = false;

  getEventThanks(event: boolean){
    console.log(event)
    if(event == true){
      this.loginBool = false;
      this.boardBool = true;
    }
  }
}

