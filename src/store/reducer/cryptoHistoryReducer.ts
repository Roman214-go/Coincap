import { CryptoHistoryState, getCryptoHistoryAction, GET_CRYPTO_HISTORY } from "../../types/Crypto";

const initialState: CryptoHistoryState = {
  cryptoHistory: [],
};


export const cryptoHistoryReducer = (state = initialState,
    action: getCryptoHistoryAction): CryptoHistoryState => {
  switch (action.type) {
    case GET_CRYPTO_HISTORY:
      return {
        cryptoHistory: action.payload,
      };
    default:
      return state;
  }
};
