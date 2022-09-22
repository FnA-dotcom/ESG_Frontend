import { Action } from "@ngrx/store";
import { ACTIONS, ActionTypes } from "../actions/actions";


export interface LookupState{
    Titles: any[] | undefined;
    Marital: any[] | undefined,
    Gender: any[] | undefined,
    Doctors: any[] | undefined
}

export const initialState: LookupState = {
    Titles: null,
    Marital: null,
    Gender: null,
    Doctors: null
}

export function reducer(state = initialState,action: ACTIONS): LookupState{
    switch(action.type){
        case ActionTypes.Title: {
            return {
                ...state,
                Titles: action.payload.data
            }
        }

        case ActionTypes.Marital: {
            return {
              ...state,
              Marital: action.payload.data
            };
          }

          case ActionTypes.Gender: {
            return {
                ...state,
                Gender: action.payload.data
              };
          }

          case ActionTypes.Doctor: {
            return {
                ...state,
                Doctors: action.payload.data
              };
          }

        default: {
            return state;
        }
    }

   
}
export const getTitlesState = (state: LookupState) => state.Titles;
export const getGenderState = (state: LookupState) => state.Gender;
export const getMaritalState = (state: LookupState) => state.Marital;
export const getDoctorsState = (state: LookupState) => state.Doctors;