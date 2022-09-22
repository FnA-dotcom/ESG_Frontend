import { Action } from "@ngrx/store";


// Auth Action
export enum ActionTypes {
Title = '[Lookup] Title',
Marital = '[Lookup] Marital',
Gender = '[Lookup] Gender',
Doctor = '[Lookup] Doctor',
}

export class TitleLookup implements Action {
    readonly type: string = ActionTypes.Title;
    constructor(public payload: any) {}
}

export class MaritalLookup implements Action {
    readonly type: string = ActionTypes.Marital;
    constructor(public payload: any) {}
}

export class GenderLookup implements Action {
    readonly type: string = ActionTypes.Gender;
    constructor(public payload: any) {}
}

export class DoctorLookup implements Action {
    readonly type: string = ActionTypes.Doctor;
    constructor(public payload: any) {}
}


export type ACTIONS = TitleLookup | MaritalLookup | GenderLookup | DoctorLookup; 