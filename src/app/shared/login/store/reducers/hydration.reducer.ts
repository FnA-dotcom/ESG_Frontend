import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { LoginState } from "../store";
import { initialState, State } from "./login.reducer";



export const hydrationMetaReducer = (
  reducer: ActionReducer<State>
): ActionReducer<State> => {
  
  return (state, action) => {
   
    console.log(action.type)
    if(action.type === '[Auth] Logout')
    { 
      console.log('logout from hydration reducer');

      localStorage.setItem("state", JSON.stringify(initialState));
      return
    }
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};