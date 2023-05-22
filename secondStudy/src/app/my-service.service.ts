import { Injectable } from '@angular/core';
import { INFORMATION } from './MyType';// MyType.ts 파일에서 INFORMATION 가져옴
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
public readonly myData: INFORMATION={
  data1:'data1',
  data2:1433,
  data3:['data3_1','data3_2']
};
  constructor() { }
  private FACTORY : BehaviorSubject<any> = new BehaviorSubject({});  //??
  public readonly TV: Observable<any> = this.FACTORY.asObservable();  //??????

  public addData(arg : boolean, loginInfomation? : any) : void{
    if(arg){
      this.FACTORY.next(loginInfomation);  //????
    } 
  }



}
