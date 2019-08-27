import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url :"http://localhost:9000/enroll"//give server url where we wanted to post form data

  constructor(private http : HttpClient) { }

  register(userData)//this method is making the post request
  {
    return this.http.post(this._url,userData);
  }
}
