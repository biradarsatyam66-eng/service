import { Injectable } from '@angular/core';
import { todoArr } from '../const/todo';
import { Itodo, ItodRes } from '../model/todo.interface';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoarr:Itodo[] = todoArr
  editobj$ : Subject<Itodo> = new Subject<Itodo>()

  constructor() { }

  fetchtodo():Observable<Itodo[]>{
    return of(this.todoarr)
  }

  createtodo(todo:Itodo):Observable<ItodRes>{
    this.todoarr.unshift(todo)
    return of({
      todoitem:todo,
      msg:'NEW TODO ADD SUCCESSFULLY!!'
    })
  }

  updateobj(updatetodo:Itodo):Observable<ItodRes>{
    let getindex = this.todoarr.findIndex(i=>i.todoid === updatetodo.todoid)
    this.todoarr[getindex] = updatetodo
    return of({
      todoitem:updatetodo,
      msg:'TODO UPDATED SUCCESSFULLY!!'
    })
  }

  deletetodoobj(todoid:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todoid)
    this.todoarr.splice(getindex,1)
    return of({
      todoitem:todoid,
      msg:'TODO DELETED SUCCESSFULLY!!!'
    })
  }
}
