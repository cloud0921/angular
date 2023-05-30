import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가
import { my_check } from './my-check.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new FormControl('', my_check()); 
  position = {
    left :  '0px',
    top : '0px',
    width : '200px',
    height : '200px',
    border : '1px solid gray',
    position : 'absolute'
  };
  private canElementMove = false;
  set mouseStatus(arg:any){  //마우스의 상태가 변화됨을 적용하는 함수 입니다.
    this.canElementMove = arg;
  }
  getEvent(event: any) : void{
    if(this.canElementMove){
      console.log(event)
    }
  }

}
