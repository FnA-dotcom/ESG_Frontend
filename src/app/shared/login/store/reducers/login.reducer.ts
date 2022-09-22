import { Facility } from '../../models/facility';
import { Menus } from '../../models/menus';
import { User } from '../../models/user';
import { AuthAction, AuthActionTypes } from '../actions/login.action';

export interface State{
    
    isAuhtenticated: boolean;

    user:User | undefined;

    facility: Facility[] | undefined;

    privileges: Menus[];

    errorMessage: string | undefined;

    tenentId: string;

    selectedFacility: Facility | undefined;
}

export const initialState: State = {
    isAuhtenticated: false,
    user: null,
    privileges: null,
    errorMessage: null,
    facility: null,
    selectedFacility: null,
    tenentId: 'md',//'md'
}

export function reducer(
    state = initialState,
    action: AuthAction
): State{
    switch(action.type){
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuhtenticated: true,
                user: {
                    token: action.payload.response.token,
                    id: action.payload.response.id,
                    userId: action.payload.response.userId,
                    userName: action.payload.response.userName,
                    userType: action.payload.response.userType,
                    role: action.payload.response.role,
                    roleId: action.payload.response.roleId,
                    head: action.payload.response.head,
                    changePasswordIndicator: action.payload.response.changePasswordIndicator,
                    forgetPasswordIndicator: action.payload.response.forgetPasswordIndicator,
                },
                
                privileges: action.payload.response.privileges,
                facility: action.payload.response.facility,
                errorMessage: null,
                // tenentId: action.payload.response.id
                // tenentId: action.payload.response.id
                tenentId: '8'
            }
        }

        case AuthActionTypes.LOGIN_FAIL: {
            return {
                
              ...state,
              errorMessage: action.payload.error.message
            };
          }

          case AuthActionTypes.LOGOUT: {
              
            return initialState;
          }

          case AuthActionTypes.Facility_Selected: {
              console.log("AuthActionTypes.Facility_Selected "+ action.payload.id.toString());
           return { 
               ...state, 
               selectedFacility: action.payload,
            //    tenentId: action.payload.id.toString()
             tenentId: '8'
            }
          }

          case AuthActionTypes.Facility_Update: {
            return { 
                ...state, 
                selectedFacility: action.payload,
                tenentId: action.payload.id
             }
           }


           case AuthActionTypes.LoginFail_Update: {
            return { 
                ...state, 
                errorMessage: null
             }
           }

           
        default: {
            return state;
        }
    }

   
}


export const getUserTokenState = (state: State) => state.user;
export const getErrorMsgState = (state: State) => state.errorMessage;
export const getTenentIdState = (state: State) => state.tenentId;
export const getFacilitiesState = (state: State) => state.facility;
export const getUserState = (state: State) => state.user;
export const getselectedFacility = (state: State) => state.selectedFacility;