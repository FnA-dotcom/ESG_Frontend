import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/shared/login/services/login.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    private token: any = undefined;
  constructor(
    public authService: LoginService,
    public router: Router
  ) {}
  canActivate(): boolean {
     
    // this.authService.getToken().subscribe(token => {
    //     this.token = token
    //   });
     
    // if (!this.token) {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }
    if(localStorage.getItem('userName'))
    {
      return true;
    }
    else
    {
      this.router.navigate[('login')];
      return false
    }
  }

  canActivateChild(): boolean {
    // this.authService.getToken().subscribe(token => {
    //     this.token = token
    //   });
    // if (!this.token) {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }
    if(localStorage.getItem('userName'))
    {
      return true;
    }
    else
    {
      this.router.navigate[('login')];
      return false
    }
  }   
}