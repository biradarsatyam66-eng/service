import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild('postform') postform !: NgForm
  editid!:number

  isineditmode:boolean = false

  constructor(private _postservice:PostService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this._postservice.editpost$
    .subscribe({
      next:res=>{
        this.editid = res.id
        this.postform.form.patchValue(res)
        this.isineditmode = true
      }
    })
  }

  onAddpost(){
    let newpost = {...this.postform.value,id:Date.now()}
    this._postservice.createpost(newpost)
    this.postform.reset()
    this._snackbar.onshowsnackbar('NEW POST CREATED SUCCESSFULLY!!!')
  }

  updatepost(){
    let updateobj = {...this.postform.value,id:this.editid}
    this._postservice.updatepost(updateobj)
    this.isineditmode = false
    this._snackbar.onshowsnackbar('POST UPDATED SUCCESSFULLY!!!')
    this.postform.reset()
  }
}
