import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-details',
  template :`<h4>Employee Details</h4>
  <h6>{{errorMsg}}</h6>
  <ul *ngFor="let employe of employees">
  <li>{{employe.id}},{{employe.name}},{{employe.destination}}</li>
  
  </ul>`,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];
  public errorMsg = "";
  
  constructor(private _empoyeedetail : EmployeeService) { }

  ngOnInit() {
    this._empoyeedetail.getEmployee().subscribe(data => this.employees =data
      ,error =>this.errorMsg =error);
    //here we are getting data through getEmployee() method which is in service class this method 
    //is return observable response which we have to subscribe for receving data in this method data is receive the observable
    //response which we have assign to employee local variable
    console.log("hiiiii i am  printing here"+this.employees)
  }

}
