import { Injectable } from '@angular/core';
import { Imovies } from '../model/movie.interface';
import { movie } from '../const/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  editmovie$ = new Subject<Imovies>()

  movieArray:Imovies[] = []

  constructor() { }


  fetchmovie(){
    return this.movieArray = movie
  }

  createmovie(movie:Imovies){
    return this.movieArray.unshift(movie)
  }

  updatemovie(movie:Imovies){
    let getindex = this.movieArray.findIndex(i=>i.id === movie.id)
    this.movieArray[getindex] = movie
  }

  deletemovie(id:number){
    let getindex = this.movieArray.findIndex(i=>i.id === id)
    this.movieArray.splice(getindex,1)
  }
}
