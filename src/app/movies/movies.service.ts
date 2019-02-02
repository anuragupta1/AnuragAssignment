import { Injectable } from '@angular/core' ;
import {HttpClient} from '@angular/common/http' ;
import {Observable} from 'rxjs' ;

@Injectable ()

// calling the api

export class MoviesService {
    private _movieUrl = 'https://ngmovies.herokuapp.com/api/getMovies';
    constructor(private _http: HttpClient) {}
    // we can create n number of functions
   getMovies(): Observable<any[]> {
    return this._http.get<any[]>(this._movieUrl) ;
   }



}

