import { Component, OnInit } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  moviesArr:Imovies[] = []

  constructor(private _movieservice:MovieService) { }

  ngOnInit(): void {
    this.getmovie()
  }

  getmovie(){
    this.moviesArr = this._movieservice.fetchmovie()
    console.log(this.moviesArr)
  }
}
