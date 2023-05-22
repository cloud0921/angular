import { Component, OnInit, Input, Output, EventEmitter,Inject  } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가합니다!!!!!
import { Validators} from '@angular/forms';
import { INFORMATION } from '../MyType';  //새로만든 타입을 추가 해 줍니다.
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() visible1 : boolean= false;
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter();  //보내는 역할
  // id:string="";
  // pwd:string="";
  id = new FormControl('');  //폼 컨트롤러 클래스로 바꿉니다.
  pwd = new FormControl('', [Validators.required, Validators.minLength(4)]); //폼 컨트롤러 클래스로 바꿉니다.



  private message="";
  styleArray = {'wrong_id':false, 'wrong_pwd':false};




  constructor(service:MyServiceService){
    console.log(service)
  }

  ngOnInit(): void {
    
  }

  tryToLogin() : void{
    if(this.id.value =='admin' && this.pwd.value == '1234'){
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);  //app컴포넌트에 전달
    } else if(this.id.value != 'admin'){
      this.setMessage = 'ID가 잘못되었습니다.';
      this.styleArray.wrong_id=true;
      this.styleArray.wrong_pwd=false;
    } else if(this.pwd.value != '1234'){
      this.setMessage = '비밀번호가 잘못되었습니다.';
      this.styleArray.wrong_id=false;
      this.styleArray.wrong_pwd=true;
    } 
  }
  set setMessage(arg:any){  //대입합니다.
    this.message = arg;
  } 

  get getMessage() : any{  //가져옵니다.
    return this.message;
  }
}
