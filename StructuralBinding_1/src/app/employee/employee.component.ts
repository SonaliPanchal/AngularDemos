import { Component, OnInit } from '@angular/core';
import { Server } from 'https';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee',
  template:`<h4>Employee list</h4>
  <h4>{{errorMsg}}</h4>
  <ul *ngFor="let employe of employees">
  <li>{{employe.name}}</li>
  </ul>`,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public employees =[];
public errorMsg ;
constructor(public _empoyeeServeice : EmployeeService ,public _a:  EmployeeService){}
ngOnInit() {//this ngOninit hook life cycle comes into pitcher when componenent get initialze
 this._empoyeeServeice.getEmployee().subscribe(data =>this.employees = data
  ,error => this.errorMsg = error);//in component class we are dealing with exception is like this way
  }
 
}
