import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/model/post.interface';
import { Post2Service } from 'src/app/services/post2.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-post2-card',
  templateUrl: './post2-card.component.html',
  styleUrls: ['./post2-card.component.scss']
})
export class Post2CardComponent implements OnInit {

  @Input() getpost !: Ipost

  constructor(private _postservice:Post2Service,
    private _matdialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onedit(editpost:Ipost){
    this._postservice.editpost$.next(editpost)
  }

  ondelete(deleteid:number){
    let confi = new MatDialogConfig()
    confi.disableClose = true
    confi.width = '800px'
    confi.data = 'DO U WANT TO DELETE THIS POST!!'
    let matref = this._matdialog.open(GetconfirmComponent,confi)
    matref.afterClosed()
    .subscribe({
      next:res=>{
        if(res){
          this._postservice.deletepost(deleteid)
        }
      }
    })
  }
}
// this._postservice.deletepost(deleteid)