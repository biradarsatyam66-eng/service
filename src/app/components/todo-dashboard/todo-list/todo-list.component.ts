import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoarray = todoArr

  constructor(private _todoservice:TodoServiceService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.getTodo()
  }

  getTodo(){
    this._todoservice.fetchtodo()
    .subscribe({
      next:res=>{
        this.todoarray = res
        console.log(res)
      }
    })
  }

  onEdit(todo:Itodo){
    this._todoservice.editobj$.next(todo)
  }

  ondelete(todoid:string){
    this._todoservice.deletetodoobj(todoid)
    .subscribe({
      next:res=>{
        this._snackbar.onshowsnackbar(res.msg)
      }
    })
  }

}
