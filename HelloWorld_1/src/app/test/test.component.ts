import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',//put into root component html file from there it will 
  //render to this below template
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
