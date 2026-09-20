import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @ViewChild('movieform') movieform !: NgForm


  isinEditmode :boolean = false
  editid!: number

  constructor(private _movieservice:MovieService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._movieservice.editmovie$
    .subscribe({
      next:res=>{
        this.isinEditmode = true
        this.movieform.form.patchValue(res)
        this.editid = res.id
      }
    })
  }


  onAddMovie(){
    let newmovie = {...this.movieform.value,id:Date.now()}
    this._movieservice.createmovie(newmovie)
    this.movieform.reset()
    this._snackbar.onshowsnackbar('NEW MOVIE ADDED SUCCESSFULLY!!!')
  }

  onUpdateMovie(){
    let updatemovie = {...this.movieform.value,id:this.editid}
    this._movieservice.createmovie(updatemovie)
    this.isinEditmode = false
    this.movieform.reset()
    this._snackbar.onshowsnackbar(`MOVIE WITH ${this.editid} IS UPDATED SUCCESSFULLY!!!`)
  }
}
