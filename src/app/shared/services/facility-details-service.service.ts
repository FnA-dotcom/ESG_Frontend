import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityDetailsServiceService {

  facilityData=new Subject<Object>();

  facilityDetails:any;
  constructor() { }

  
}
