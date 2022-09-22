import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { User } from "../models/user";
import * as fromStore from '../../login/store/store';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    
    private baseUrl = environment .apiUrl;

    constructor(private http: HttpClient, private store: Store<fromStore.LoginState>){}

    logIn(data: any): Observable<any>{
        const url = `${this.baseUrl}user/user/getUser`;
        //  return  this.http.post<any>(url, data);
        // return of({response: {token: true } }) 
        // const url = `${this.baseUrl}user/user/getUser`;
        //  return  this.http.post<any>(url, data);
        return of({response: {token: true } }) 
    }

    getToken(): Observable<any>{
        let token = undefined;
        // this.store.select<any>(fromStore.getToken).subscribe(
        //     state => {
        //     token = state
        // });
        token = localStorage.getItem('token');
        return of(token);
    }

    getTenentId(): Observable<any>{
        let tenetId = undefined;
         this.store.select<any>(fromStore.getTenentId).subscribe(
             state => {
             tenetId = state
         });

         console.log("getTenentId() ->> "+tenetId);
        return of(tenetId);
    }

}