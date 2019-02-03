import {Component, OnInit } from '@angular/core' ;
import {MoviesService} from './movies.service' ;
@Component({
  templateUrl: './moviesSideView.component.html'
 })

 export class MoviesSideComponent implements OnInit {
     movies: any[];
     id: string;
        constructor(private _movies: MoviesService) {}

    ngOnInit(): void {
        this._movies.getMovies()
            .subscribe((data) => this.movies = data) ;
    }
    updateDetails(name: string): void {
        this._movies.getMovieDetail(name)
            .subscribe((data) => this.movies = data) ;
    }}
