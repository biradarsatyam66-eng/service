import { Injectable } from '@angular/core';
import { Imovies } from '../model/movie.interface';
import { movie } from '../const/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieArray:Imovies[] = []

  constructor() { }


  fetchmovie(){
    return this.movieArray = movie
  }
}
