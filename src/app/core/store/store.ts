import * as lookup from '../store/reducers/reducers';
import * as actions from '../store/actions/actions';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { state } from '@angular/animations';

export interface MainState {
    lookupState: lookup.LookupState;
  }
  
  export const reducers: ActionReducerMap<MainState> = {
      lookupState: lookup.reducer
  };

  export const getMainState = createFeatureSelector<MainState>('MainState');

  //get token
  export const lookupState = createSelector(getMainState, (state: MainState) => state.lookupState);

  export const getTitles = createSelector(lookupState, lookup.getTitlesState);

  export const getMarital = createSelector(lookupState, lookup.getMaritalState);

  export const getGender = createSelector(lookupState, lookup.getGenderState);

  export const getDoctors = createSelector(lookupState, lookup.getDoctorsState);
