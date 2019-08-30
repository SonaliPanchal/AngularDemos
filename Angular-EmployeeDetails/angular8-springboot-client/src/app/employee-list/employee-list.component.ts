import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService,private tosater :ToastrService ) { }
  employees : Observable<Employee[]>
  message : JSON
  errmessage = "not found";
  ngOnInit() {
    this.reloadData();
   // this.getMessage();
  }
  reloadData()
  {
    this.employeeService.getEmployeesList()//for getting response we should subscribe
    .subscribe(
      response =>console.log(this.employees = response),
      error => console.log(this.message = error)
    )
  }
  deleteEmployee(id:number)//for deleting the reord this method is calling from emloyeelist.html 
  {
    this.employeeService.deleteEmployeebyId(id)
    .subscribe(
      response =>{console.log(response,"deleted")
      this.tosater.warning("data deleted succesfully")
      this.reloadData()
    },

    error => console.log("not deleted"+error)
    );
  }
  updateEmployee(id:number)
  {
    this.employeeService.updateEmployeeById(id,this.employees)
  }
  
  /*getMessage()
  {
    this.employeeService.getHello().subscribe
    (data =>this.message = data,
     error =>this.errmessage = error) 
  }*/
}
