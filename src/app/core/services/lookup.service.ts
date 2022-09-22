import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LookupService{

    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient){}

    getTitles(): Observable<any>{
        const url = `${this.baseUrl}registration/title`;
        return  this.http.get<any>(url);

    }

    getMarital(): Observable<any>{
        const url = `${this.baseUrl}registration/marital`;
        return  this.http.get<any>(url);

    }

    getGender(): Observable<any>{
        const url = `${this.baseUrl}registration/gender`;
        return  this.http.get<any>(url);

    }

    getDoctors(): Observable<any>{
        const url = `${this.baseUrl}registration/doctor`;
        return  this.http.get<any>(url);

    }

}