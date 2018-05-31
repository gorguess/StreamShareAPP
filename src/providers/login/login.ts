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

  loginUsers(login: Array<any>) {
    return this.http.post('http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api/login',
    { 
      'emailNick': login[0].emailNick,
      'password': login[0].password 
    });
  }

  registerUsers(register: Array<any>) {
    return this.http.post('http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api/register',
      { 
        'name': register[0].name, 
        'surname': register[0].surname, 
        'nickname': register[0].nickname,
        'email': register[0].email, 
        'birthdate': register[0].birthdate, 
        'password': register[0].password
      });
  }

  getAllMovies() {
    return this.http.get('http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api//getallmovies/:page?');
  }

}
