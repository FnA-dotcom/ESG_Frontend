import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientnameService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() {

   }
  
   changeMessage(message: string) {
    this.messageSource.next(message)
  }
  //  patientnamesender(name){
  //    this.patientnameupdate.next(name);
  //  }
}
