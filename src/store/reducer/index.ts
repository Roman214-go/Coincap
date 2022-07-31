import { combineReducers } from "redux";
import { cryptoReducer } from "./cryptoReducer";
import { oneCryptoReducer } from "./oneCryptoReducer";
import { walletReducer } from "./walletReducer";

export const rootReducer = combineReducers({ 
    crypto: cryptoReducer,
    oneCrypto: oneCryptoReducer,
    wallet: walletReducer,
});

export type RootState = ReturnType<typeof rootReducer>