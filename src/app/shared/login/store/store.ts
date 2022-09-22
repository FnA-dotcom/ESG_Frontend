import * as login from './reducers/login.reducer';
import * as fromLogin from './actions/login.action';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { state } from '@angular/animations';
import { hydrationMetaReducer } from './reducers/hydration.reducer';

export interface LoginState {
    authState: login.State;
  }
  
  export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
  ]
  
  export const reducers: ActionReducerMap<LoginState> = {
    authState: login.reducer
  };

  export const getAuthState = createFeatureSelector<LoginState>('authState');

  //get token
  export const userState = createSelector(getAuthState, (state: LoginState) => state.authState);

  export const errorMsgState = createSelector(userState, login.getErrorMsgState);
  
  export const getToken = createSelector(userState, login.getUserTokenState);
  
  export const getTenentId = createSelector(userState, login.getTenentIdState);
  
  export const getFacilities = createSelector(userState, login.getFacilitiesState);
  
  export const getselectedFacility = createSelector(userState, login.getselectedFacility);
  
  export const getUser = createSelector(userState, login.getUserState);