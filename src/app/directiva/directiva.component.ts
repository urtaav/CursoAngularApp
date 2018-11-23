import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent  {

  listCourse: string[]= ['TypesScript','Java SE','C++','PHP','Angular'];
  enable: boolean= true;

  constructor() { }

  setEnable(): void{
    this.enable = (this.enable==true)? false: true;
  }



}
