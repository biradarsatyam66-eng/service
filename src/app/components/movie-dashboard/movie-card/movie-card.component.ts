import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Imovies } from 'src/app/model/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() getmovies !: Imovies

  constructor(private _movieservice:MovieService,
    private _snackbar : SnackbarService,
    private _matdialog : MatDialog
  ) { }

  ngOnInit(): void {
  }


  onEdit(movie:Imovies){
    this._movieservice.editmovie$.next(movie)
  }

  ondelete(id:number){
    let confi = new MatDialogConfig
    confi.disableClose = true
    confi.width = '800px'
    confi.data = 'DO YOU WANT TO DELETE THIS MOVIE!!!!!'
    let matref =this._matdialog.open(GetconfirmComponent,confi)
    matref.afterClosed()
    .subscribe({
      next:res=>{
        if(res){
          this._movieservice.deletemovie(id)
          this._snackbar.onshowsnackbar(`MOVIE WITH ${id} DELETED SUCCESSFULLY!!!`)
        }
      }
    })
  }

  
}
