import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar) { }

  onshowsnackbar(massage:string){
    this._snackbar.open(massage,'close',{
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition:'left'
    })
  }
}
