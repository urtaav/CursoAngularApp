import { Component } from '@angular/core';

@Component({ //clase componente de angular
  selector: 'app-root',
  templateUrl: './app.component.html',//templete html
  styleUrls: ['./app.component.css']//hojas de estilo
})
export class AppComponent {
  title = 'angular';

  course: string = "Angular";

  teacher: string = "Mani";
}
