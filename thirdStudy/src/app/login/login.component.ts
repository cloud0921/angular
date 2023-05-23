import { Component, OnInit } from '@angular/core';
import { AskService } from '../ask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id : string="";
  passwd : string="";
  constructor(private service : AskService, private rout: Router) { 
    //생성자에 private를 붙여서 의존성을 주입받으면 글로벌하게 사용가능 합니다.
    //private가 있으므로 다른 컴포넌트나 html파일에서는 접근할 수 없습니다.
  }
  ngOnInit(): void {
 
  }

  login() {
    this.service.tryToLogin({id : this.id, passwd : this.passwd}).subscribe( (arg:any)=>{
      console.log(arg);
      if(arg.status == true){
        alert('로그인 성공!')
        this.rout.navigate(['/board']);
      }
    });
  }
}
