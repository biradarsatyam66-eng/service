import { Injectable } from '@angular/core';
import { Ipost } from '../model/post.interface';
import { posts } from '../const/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postarray:Ipost[] = []

  editpost$:Subject<Ipost> = new Subject<Ipost>()

  constructor() { }

  fetchpost(){
    return this.postarray = posts
  }

  createpost(postobj:Ipost){
    return this.postarray.unshift(postobj)
  }

  updatepost(updateobj:Ipost){
    let getindex = this.postarray.findIndex(i=>i.id === updateobj.id)
    this.postarray[getindex] = updateobj
  }

  deleteobj(removeId:number){
    let getindex = this.postarray.findIndex(i=>i.id === removeId)
    this.postarray.splice(getindex,1)
  }
}
