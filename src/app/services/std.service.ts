import { Injectable } from '@angular/core';
import { StdArr } from '../const/std';
import { Istd, Istdres } from '../model/std.interface';
import { Observable ,of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {


  StdArray!:Istd[]
  editstd$ : Subject<Istd> = new Subject<Istd>()

  constructor() { }

  fetchStd():Observable<Istd[]>{
    return of(this.StdArray = StdArr)
  }

  createstd(std:Istd):Observable<Istdres>{
    this.StdArray.unshift(std)
    return of({
      stdinfo : std,
      msg: 'NEW STUDENT ADD SUCCESSFULLY!!!'
    })
  }

  updatestd(std:Istd):Observable<Istdres>{
    let getindex = this.StdArray.findIndex(i=>i.stdId === std.stdId)
    this.StdArray[getindex] = std
    return of({
      stdinfo : std,
      msg:'STD UPDATED SUCCESSFULLY!!!'
    })
  }

  deletestd(stdid:string):Observable<Istdres>{
    let getindex = this.StdArray.findIndex(i=>i.stdId === stdid)
    let resmoveid =  this.StdArray.splice(getindex,1)
    return of({
      stdinfo : resmoveid[0],
      msg :'STD DELETED SUCCESSFULLY !!!'
    })
  }
}
