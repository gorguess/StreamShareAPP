import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { User } from '../models/user';
import { Movie } from '../movie/movie';
import { GLOBAL } from '../global/global';

@Injectable()
export class MovieProvider {
    public url: String;
    public identity: any;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    getAllMovies(token: any, page: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallmovies/' + page,  {headers: headers});
    }
}
