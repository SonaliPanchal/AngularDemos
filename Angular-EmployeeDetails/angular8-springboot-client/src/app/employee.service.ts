import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  private baseUrl = "http://localhost:4100/api/employees/" ;

  getEmployeesList(): Observable <any>//making api get request to get employee data
  {
     return this._http.get(this.baseUrl);
  }

  createEmployee(employee : Object) : Observable<any>//for creating new employee
  {
     return this._http.post(this.baseUrl,employee);
  }

  deleteEmployeebyId(id:number) : Observable <any>
  {
  return this._http.delete(`${this.baseUrl}/${id}`);
  }
  updateEmployeeById(id,employee) : Observable <any>
  {
    return this._http.put(`${this.baseUrl}/${id}`,employee);
  }
  getEmployee(id:number) : Observable<any>
  {
    return this._http.get(this.baseUrl+id);
  }

  getHello() : Observable <any>
  {
    return this._http.get("http://localhost:4100/api/hello/");
  }
}
