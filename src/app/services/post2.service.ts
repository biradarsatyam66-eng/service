import { Injectable } from '@angular/core';
import { Ipost } from '../model/post.interface';
import { posts } from '../const/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post2Service {

  constructor() { }

  editpost$ :Subject<Ipost> = new Subject<Ipost>()

  postArray:Ipost[] = []

  fetchpost(){
    return this.postArray = posts
  }

  createpost(newpost:Ipost){
    return this.postArray.unshift(newpost)
  }

  updatepost(updatepost:Ipost){
    let getindex = this.postArray.findIndex(i=>i.id === updatepost.id)
    this.postArray[getindex] = updatepost
  }

  deletepost(deleteId:number){
    let getindex = this.postArray.findIndex(i=>i.id === deleteId)
    this.postArray.splice(getindex,1)
  }
}
