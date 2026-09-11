import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoform') todoform !: NgForm

  isineditmode:boolean = false
  editid !: string

  constructor(private _todoservice:TodoServiceService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this._todoservice.editobj$
    .subscribe({
      next:res=>{
          this.editid = res.todoid
          this.isineditmode = true
          this.todoform.form.patchValue(res)
      }
    })
  }

  ontodoAdd(){
    let newTodo:Itodo = {...this.todoform.value,todoid:Date.now().toString()}
    this.todoform.reset()
    this._snackbar.onshowsnackbar('NEW TODO ADDED SUCCESSFULLY!!')
    this._todoservice.createtodo(newTodo)
    .subscribe({
      next:res=>{
        console.log(res)
      },
      error:err=>{
        this._snackbar.onshowsnackbar(err)
      }
    })
  }

  onUpdate(){
    let updateTodo = {...this.todoform.value,todoid:this.editid}
    this.isineditmode = false
    this.todoform.reset()
    this._snackbar.onshowsnackbar('TODO UPDATED SUCCESSFULLY!!')
    this._todoservice.updateobj(updateTodo)
    .subscribe({
      next:res=>{
        console.log(res)
      }
    })
  }
}
