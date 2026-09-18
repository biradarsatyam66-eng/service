import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/model/post.interface';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() getposts !: Ipost
  constructor(private _postservice : PostService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
  }


  oneditpost(editpost:Ipost){
    this._postservice.editpost$.next(editpost)
  }

  ondelete(id:number){
    this._postservice.deleteobj(id)
    this._snackbar.onshowsnackbar('POST DELETED SUCCESSFULLY!!!')
  }
}
