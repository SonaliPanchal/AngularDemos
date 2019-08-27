import { Component } from '@angular/core';

@Component({//having meta data which define as a component decorator 
  //and also says to decorator it is a componet class
  selector: 'app-root',//it is a basic html tag which use to represent AppComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld 1234';
}
