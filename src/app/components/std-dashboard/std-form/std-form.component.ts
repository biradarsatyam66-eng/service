import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StdService } from 'src/app/services/std.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('stdform') stdform !: NgForm


  isineditmode:boolean = false
  isinvalid:boolean = false

  constructor(private _stdservice:StdService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onAddStd(){
    if(this.stdform.valid){
      this.isinvalid = false

      let newStd:Istd = {...this.stdform.value,stdId:Date.now().toString()}
      this.stdform.reset()
      this._stdservice.createstd(newStd)
      .subscribe({
        next:res=>{
          this._snackbar.onshowsnackbar(res.msg)
        }
      })
    }else{
      this.isinvalid = true
    }
  }

}
