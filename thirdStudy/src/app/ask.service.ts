import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  //저장소(나중에 데이터베이스 서버)
  private readonly storage = {
    id : 'admin',
    passwd : '1234'
  }
  constructor() {   //생성자에게 2개의 구독을 지시합니다!!!
    this.test1().subscribe((arg:any)=>{
      console.log(arg)
    });
    this.test1().subscribe((arg:any)=>{
      console.log(arg)
    });    
  }

  test1(){  //요렇게 추가합니다!!!!!!!!!!!!
    return new Observable( arg=>{
      arg.next({test:1});
      arg.complete();
    });
  }

  //로그인을 시도하는 함수
  tryToLogin(param : any){
    return new Observable( arg=>{  //관측대상 생성
      if(param.id == this.storage.id && param.passwd == this.storage.passwd){  //로그인 정보가 맞다면
        arg.next({status: true});  //성공
        localStorage.setItem('status',"true");  //로컬저장소에 저장!
      } else {
        arg.next({status: false, reason : 'wrong information'});  //실패
      }
      arg.complete();
    });
  }
   //가드가 구독하는 대상
   readonly isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);
   //로그인이 되었는지 확인하는 함수
   isLogIn() : void{
   if(localStorage.getItem('status') == 'true'){  //저장소에 로그인정보가 있는지 확인
     this.isLogged.next(true);
   } else {
     this.isLogged.next(false);
  }
}
}