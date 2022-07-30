import { combineReducers } from "redux";
import { cryptoReducer } from "./cryptoReducer";

export const rootReducer = combineReducers({ 
    crypto: cryptoReducer,
});

export type RootState = ReturnType<typeof rootReducer>