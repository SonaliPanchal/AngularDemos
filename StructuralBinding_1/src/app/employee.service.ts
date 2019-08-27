import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';//for erroe handling
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url : string = "/assets/Data/employee.json1";

  constructor(private http : HttpClient) { }
  getEmployee(): Observable <IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url)
    .catch(this.errorHandler);//for handling error call catch method
  }
  errorHandler(error : HttpErrorResponse)
  {
    return Observable.throw(error.message|| "server Error");
  }
}
