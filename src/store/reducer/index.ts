import { combineReducers } from "redux";
import { cryptoHistoryReducer } from "./cryptoHistoryReducer";
import { cryptoReducer } from "./cryptoReducer";
import { oneCryptoReducer } from "./oneCryptoReducer";
import { walletReducer } from "./walletReducer";

export const rootReducer = combineReducers({
  crypto: cryptoReducer,
  oneCrypto: oneCryptoReducer,
  wallet: walletReducer,
  cryptoHistory: cryptoHistoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>
