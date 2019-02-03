import { Injectable } from '@angular/core' ;
import {HttpClient} from '@angular/common/http' ;
import {Observable, observable} from 'rxjs' ;

@Injectable ()

// calling the api

export class MoviesService {
    private _movieUrl = 'https://ngmovies.herokuapp.com/api/getMovies';
    private movies: any;
    constructor(private _http: HttpClient) {}
    // we can create n number of functions
   getMovies(): Observable<any[]> {
    return this._http.get<any[]>(this._movieUrl) ;
   }
          
   getMovieDetail(name: any) {
    
    return this._http.get<any[]>(`${this._movieUrl}?name=${name}`) ;                                                    
    
}
}

