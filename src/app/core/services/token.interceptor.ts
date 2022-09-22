import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/shared/login/services/login.service";
import {
  catchError,
  tap,
  switchMap,
  mergeMap,
  concatMap,
  exhaustMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  private authService: LoginService;
  private token: any = undefined;
  private tenentId: any = undefined;
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(LoginService);
    this.authService.getToken().subscribe(token => {
      this.token = token
    });
    this.authService.getTenentId().subscribe(id => {
      this.tenentId = String(id);
    });
    request = request.clone({
      setHeaders: {
        'Authorization': `${this.token}`,
        'Content-Type': 'application/json',
        'X-TenantID': this.tenentId
      }
    });
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe((response: any) => {
        // if (response instanceof HttpErrorResponse && response.status === 401) {
        //   console.log(response);
        // }
        return Observable.throw(response);
      });
  }
}