import { OneCryptoAction, oneCryptoActionTypes, OneCryptoState } from "../../types/Crypto";


const initialState: OneCryptoState = {
  crypto: [],
  loading: false,
  error: null,
};


export const oneCryptoReducer = (state = initialState, action: OneCryptoAction): OneCryptoState => {
  switch (action.type) {
    case oneCryptoActionTypes.GET_ONE_CRYPTO:
      return {
        crypto: [],
        loading: true,
        error: null,
      };
    case oneCryptoActionTypes.GET_ONE_CRYPTO_SUCCESS:
      return {
        crypto: [action.payload],
        loading: false,
        error: null,
      };

    case oneCryptoActionTypes.GET_ONE_CRYPTO_ERROR:
      return {
        crypto: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
