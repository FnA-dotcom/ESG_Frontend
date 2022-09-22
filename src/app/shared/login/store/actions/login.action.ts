import { Action } from "@ngrx/store";


// Auth Action
export enum AuthActionTypes {
LOGIN = '[Auth] Login',
LOGIN_FAIL = '[Auth] Login Fail',
LOGIN_SUCCESS = '[Auth] Login Success',
LOGOUT = '[Auth] Logout',
Facility_Selected = '[Faciltiy] Facility Selected',
Facility_Update = '[Faciltiy] Facility Update',
LoginFail_Update = '[Faciltiy] LoginFail Update',

}


export class Login implements Action {
    readonly type: string = AuthActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class LoginFail implements Action {
    readonly type: string = AuthActionTypes.LOGIN_FAIL;
    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
  }

  export class SelectedFacility implements Action {
    readonly type = AuthActionTypes.Facility_Selected;
    constructor(public payload: any) {}
  }

  export class UpdateFacility implements Action {
    readonly type = AuthActionTypes.Facility_Update;
    constructor(public payload: any) {}
  }

  export class UpdateLoginFailState implements Action {
    readonly type = AuthActionTypes.LoginFail_Update;
    constructor() {}
  }

export type AuthAction = Login | LoginFail | LoginSuccess | LogOut | SelectedFacility | UpdateFacility | UpdateLoginFailState;  