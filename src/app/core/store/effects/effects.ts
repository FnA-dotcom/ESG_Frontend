import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType} from '@ngrx/effects'
import { Observable, of } from "rxjs";

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LookupService } from "../../services/lookup.service";
import { ActionTypes, DoctorLookup, GenderLookup, MaritalLookup, TitleLookup } from "../actions/actions";

@Injectable()
export class Effects {

    constructor(
        private actions: Actions,
        private lookupService: LookupService,
        private router: Router
    ){

    }

    @Effect()
    Titles: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.Title),
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.lookupService.getTitles().pipe( 
                    map((data) => {
                        return new TitleLookup(data)
                    }),
                    // catchError((error) => {
                       
                    //     return of(new LoginFail({error: error}))
                    // })
                )
            })
    );

    @Effect()
    Marital: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.Marital),
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.lookupService.getMarital().pipe( 
                    map((data) => {
                        return new MaritalLookup(data)
                    }),
                    // catchError((error) => {
                       
                    //     return of(new LoginFail({error: error}))
                    // })
                )
            })
    );

    @Effect()
    Gender: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.Gender),
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.lookupService.getGender().pipe( 
                    map((data) => {
                        return new GenderLookup(data)
                    }),
                    // catchError((error) => {
                       
                    //     return of(new LoginFail({error: error}))
                    // })
                )
            })
    );

    @Effect()
    Doctor: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.Doctor),
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.lookupService.getDoctors().pipe( 
                    map((data) => {
                        return new DoctorLookup(data)
                    }),
                    // catchError((error) => {
                       
                    //     return of(new LoginFail({error: error}))
                    // })
                )
            })
    );

}