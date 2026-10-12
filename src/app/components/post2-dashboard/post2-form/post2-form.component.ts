import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post2Service } from 'src/app/services/post2.service';

@Component({
  selector: 'app-post2-form',
  templateUrl: './post2-form.component.html',
  styleUrls: ['./post2-form.component.scss']
})
export class Post2FormComponent implements OnInit {

  @ViewChild('postform') postform !: NgForm


  isineditmode :Boolean = false
  editid !: number

  constructor(private _postservice:Post2Service) { }

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

  onpostAdd(){
    let newpost = {...this.postform.value,id:Date.now}
    this._postservice.createpost(newpost)
    this.postform.reset()
  }

  onupdate(){
    let updatepost = {...this.postform.value,id:this.editid}
    this._postservice.updatepost(updatepost)
    this.isineditmode = false
    this.postform.reset()
  }
}
