import { CryptoAction, cryptoActionTypes, CryptoState } from "../../types/Crypto"


const initialState: CryptoState = {
    allCrypto: [],
    loading: false,
    error: null
}


export const cryptoReducer = (state = initialState, action: CryptoAction): CryptoState => {
    switch(action.type) {
        case cryptoActionTypes.GET_ALL_CRYPTO:
            return {
                allCrypto: [],
                loading: true,
                error: null,
            }
        case cryptoActionTypes.GET_ALL_CRYPTO_SUCCESS:
            return {
                allCrypto: action.payload,
                loading: false,
                error: null,
            }
        
        case cryptoActionTypes.GET_ALL_CRYPTO_ERROR:
            return {
                allCrypto: [],
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}