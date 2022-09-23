import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  login(loginDetails:any)
  {
    if(loginDetails.userName==='fawad' && loginDetails.password==='abc123')
    {
      localStorage.setItem('userName','ABC');
      localStorage.setItem('facilityType','facility');
      
      let userType='admin';
      return userType;
      
    }
    else if(loginDetails.userName==='lab' && loginDetails.password==='a')
    {
      localStorage.setItem('userName','lab');

      localStorage.setItem('facilityType','lab');

      localStorage.setItem('facilityName','LAB');
      
      let userType='lab';
      return userType;
      
    }
    else if(loginDetails.userName==='frontdesk' && loginDetails.password==='a')
    {
      localStorage.setItem('userName','frontdesk');
      localStorage.setItem('facilityName','victoria');
      localStorage.setItem('facilityType','facility');
      let userType='frontdesk';
      return userType;
      
    }
    else if(loginDetails.userName==='first'&& loginDetails.password==='a')
    {
      let userType='firstLogin';
      return userType;
    }
    else
    {
      return 'error';
    }
  }

  isLoggedIn()
  {
    if(localStorage.getItem('login'))
    {
      return true;
    }
    else
    {
      return false; 
    }
  }




}
