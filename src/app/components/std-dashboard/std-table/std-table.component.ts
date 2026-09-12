import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';
import { StdService } from 'src/app/services/std.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdarr : Istd[] = []
  constructor(private _stdservice:StdService) { }

  ngOnInit(): void {
    this.getstd()
  }

  getstd(){
    this._stdservice.fetchStd()
    .subscribe({
      next:res=>{
        console.log(res)
        this.stdarr = res
      }
    })
  }

}
