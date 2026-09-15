import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StdService } from 'src/app/services/std.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdarr : Istd[] = []
  constructor(private _stdservice:StdService,
    private _snackbar : SnackbarService,
    private _matdialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getstd()
  }

  getstd(){
    this._stdservice.fetchStd()
    .subscribe({
      next:res=>{
        console.log(res)
        this.stdarr = res
      }
    })
  }

  onedit(std:Istd){
    this._stdservice.editstd$.next(std)
  }

  ondelete(stdid:string){
    let config = new MatDialogConfig()
    config.disableClose = true
    config.width = '800px'
    config.maxWidth = '90%'
    config.data =  `STD WITH ID ${stdid} WANT TO DELETE`
    let Matref =  this._matdialog.open(GetconfirmComponent,config)

    Matref.afterClosed()
    .subscribe(flag=>{
      if(flag){
        this._stdservice.deletestd(stdid)
          .subscribe({
            next:res=>{
              this._snackbar.onshowsnackbar(res.msg)
            }
        })
      }
    })
  }
}
