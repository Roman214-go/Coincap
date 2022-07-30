export interface CryptoState {
    allCrypto: any[];
    loading: boolean;
    error: null | string;
}

export enum cryptoActionTypes {
    GET_ALL_CRYPTO = "GET_ALL_CRYPTO",
    GET_ALL_CRYPTO_ERROR = "GET_ALL_CRYPTO_ERROR",
    GET_ALL_CRYPTO_SUCCESS = "GET_ALL_CRYPTO_SUCCESS"
}

interface getAllCryptoAction {
    type: cryptoActionTypes.GET_ALL_CRYPTO
}

interface getAllCryptoErrorAction {
    type: cryptoActionTypes.GET_ALL_CRYPTO_ERROR;
    payload: string
}

interface getAllCryptoSuccessAction {
    type: cryptoActionTypes.GET_ALL_CRYPTO_SUCCESS;
    payload: any[]
}

export type CryptoAction = getAllCryptoAction | getAllCryptoErrorAction | getAllCryptoSuccessAction