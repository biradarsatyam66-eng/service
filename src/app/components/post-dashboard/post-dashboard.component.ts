import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/const/post';
import { Ipost } from 'src/app/model/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {


  postarr:Ipost[] = []

  constructor(private _postservice : PostService) { }

  ngOnInit(): void {
    this.getpost()
  }

  getpost(){
    this.postarr = this._postservice.fetchpost()
  }
}
