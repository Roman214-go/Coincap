import axios from "axios"
import { Dispatch } from "redux"
import { CryptoAction, cryptoActionTypes } from "../../types/Crypto"

export const getAllCrypto = () => {
    return async (dispatch: Dispatch<CryptoAction>) => {
        try {
            dispatch({type: cryptoActionTypes.GET_ALL_CRYPTO})
            const response = await axios.get(`https://api.coincap.io/v2/assets`).then(res => res.data.data)
            
            dispatch({type: cryptoActionTypes.GET_ALL_CRYPTO_SUCCESS, payload: response})
        } catch(e) {
            dispatch({type: cryptoActionTypes.GET_ALL_CRYPTO_ERROR, payload: 'Error '})
        }
    }
}