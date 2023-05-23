import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="앵귤러 공부";
  loginBool = true;
  boardBool = false;


  // constructor(private service : MyServiceService){
  //   service.TV.subscribe( arg=>{
  //     console.log('서비스의 특정 데이터가 변동되어 동작했습니다 : ',arg);
  //   });
  // }



  // getEventThanks(event: boolean){
  //   console.log(event)
  //   if(event == true){
  //     this.loginBool = false;
  //     this.boardBool = true;
  //   }
  // }
  constructor(private service : MyServiceService){
    service.TV.subscribe( arg=>{
      if(arg && arg.id){
        console.log('로그인에 성공하였습니다. : ',arg);
        this.loginBool = false;
        this.boardBool = true;
      }else{
        console.log('로그인에 실패하였습니다. :', arg)
      }
    });
}
}
