import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AskService } from './ask.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  private status : boolean = false;  //글로벌 변수

  constructor(private serv : AskService){
    serv.isLogged.subscribe( result=>{  //로그인 여부가 담길 대상을 구독합니다. (콜백행위정의)
      console.log('서버에 물어보고온 결과', result);
      this.status = result;  //결과값을 업데이트
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.serv.isLogIn();  //로그인 되었는지 확인하여 봅니다.
    return this.status;
  }
  
}