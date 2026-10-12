import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/model/post.interface';
import { Post2Service } from 'src/app/services/post2.service';

@Component({
  selector: 'app-post2-dashboard',
  templateUrl: './post2-dashboard.component.html',
  styleUrls: ['./post2-dashboard.component.scss']
})
export class Post2DashboardComponent implements OnInit {

  postarr:Ipost[] = []

  constructor(private _postservice:Post2Service) { }

  ngOnInit(): void {
    this.getpost()
  }

  getpost(){
    this.postarr = this._postservice.fetchpost()
  }
}
