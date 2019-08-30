import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ToastrService } from 'ngx-toastr';//toaster

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private tosater :ToastrService ) { }
  //tosterService is for calling toaster
  employee: Employee = new Employee();//for using this refernece on html
  submitted = false

  ngOnInit() {
  }
  newEmployee():void{
  this.submitted = false;
  this.employee = new Employee();
  }
  save()
  {
    this.employeeService.createEmployee(this.employee)
    .subscribe(
      response=>{console.log(response),
      this.tosater.success("record inserted succesfully")//here after  success opertion we are calling this toster poppup message
    },
      error =>console.error(error))
      this.employee = new Employee();
  }
  onSubmit()//this method is calling from the html so through the formModule and nad ngModel data is extrcting and submit to this method
  {
    this.submitted = true;//after suceefrully of form sumittion this status has been changed
    this.save();//calling save method for submit to  database
  }
}
