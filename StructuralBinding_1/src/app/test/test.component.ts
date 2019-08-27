import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({//(| json convert respons object into jso formate)
  selector: 'app-test',
  template : `
 <h2>{{parentData}}</h2>

 <h2>{{person | json}}</h2> 

 <h2>{{0.25 | percent}}</h2> 
 <h2>{{0.25 | currency:GBP}}</h2> 
 <h2>{{date | date : 'short'}}</h2> 
 <h2>{{date | date : 'shortTime'}}</h2> 
 <h2>{{date | date : 'shortDate'}}</h2> 
 `,
 styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public displaycolor = ["red","yellow","green","orange"];
public person = 
{
  "firstname":"sonali",
  "lastname" :"Panchal",
  "location" :"Indore"
}

 public date  = new Date();
  ngOnInit() {
  }
  
}