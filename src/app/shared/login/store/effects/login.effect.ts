import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType} from '@ngrx/effects'
import { Observable, of } from "rxjs";
import { LoginService } from "../../services/login.service";
import { AuthActionTypes, Login, LoginFail, LoginSuccess } from "../actions/login.action";

import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { LoginState } from "../store";

@Injectable()
export class LoginEffects {

    constructor(
        private actions: Actions,
        private authService: LoginService,
        private router: Router,
        private store: Store<LoginState>
    ){

    }

    // @Effect()
    // GetPersistentState: Observable<any> = this.actions.pipe(
    //     ofType(AuthActionTypes.Get_Persistent_State),
    //         map(() =>  {
    //             const storageValue = localStorage.getItem("state");
    //             if (storageValue) {
                
    //                 const state = JSON.parse(storageValue);
    //             }}
    //         )
    // );

    // @Effect()
    // SetPersistentState: Observable<any> = this.actions.pipe(
    //     ofType(AuthActionTypes.Set_Persistent_State),
    //     switchMap(() => this.store),
    //     distinctUntilChanged(),
    //     tap(state => localStorage.setItem("state", JSON.stringify(state)))
    // );

    @Effect()
    Login: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
            map((action: Login) => action.payload),
            switchMap(payload => {
                return this.authService.logIn({userName: payload.userName, password: payload.password}).pipe( 
                    map((user) => {
                        console.log("This is login")
                        console.log(user);
                        
                        return new LoginSuccess(user)
                    }),
                    catchError((error) => {
                        return  of(new LoginFail(error))
                    })
                    )
            })
    );

    
    @Effect({ dispatch: false })
        LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.response.token);
            //console.log(user.payload.response.userType)
            
            if(user.payload.response.userType == 'FACILITY'){
                this.router.navigateByUrl('/rovermd/dashboard/dashboard-1');
            }else{
                this.router.navigateByUrl('/customer/select-customer');
            }
        })
    );

    @Effect({ dispatch: false })
        LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAIL)
    );

    @Effect({ dispatch: false })
        UpdateLogInFailState: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LoginFail_Update),

    );

    @Effect({ dispatch: false })
        public LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
        })
    );

    @Effect({ dispatch: false })
        SelectedFacility: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.Facility_Selected),
        tap((facility) => {
            // if(facility.name === null || facility.name === undefined){
            //     alert('select facility from dropdown')
            // }else{
                this.router.navigateByUrl('/rovermd/dashboard/dashboard-1');
            
        })
    );

    @Effect({ dispatch: false })
    FacilityUpdate: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.Facility_Update),
        tap((facilityUpdate) => {
            // if(facility.name === null || facility.name === undefined){
            //     alert('select facility from dropdown')
            // }else{
             //   this.router.navigateByUrl('/rovermd/patient-service/quick-registration');
            
        })
    );
}