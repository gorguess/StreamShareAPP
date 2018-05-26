import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

  constructor(private http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  getUsers() {
    return this.http.get('http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api/pruebas');
  }

}
