import { Injectable } from '@angular/core';
import { StdArr } from '../const/std';
import { Istd, Istdres } from '../model/std.interface';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {


  StdArray!:Istd[]

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
}
