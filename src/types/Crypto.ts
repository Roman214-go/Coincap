export interface CryptoState {
    allCrypto: any[];
    loading: boolean;
    error: null | string;
}

export interface OneCryptoState {
    crypto: any[];
    loading: boolean;
    error: null | string;
}


export interface WalletCryptoState {
    walletCrypto: any[],
    totalPrice: any,
    exchange: number
}

export enum cryptoActionTypes {
    GET_ALL_CRYPTO = "GET_ALL_CRYPTO",
    GET_ALL_CRYPTO_ERROR = "GET_ALL_CRYPTO_ERROR",
    GET_ALL_CRYPTO_SUCCESS = "GET_ALL_CRYPTO_SUCCESS"
}

export enum oneCryptoActionTypes {
    GET_ONE_CRYPTO = "GET_ONE_CRYPTO",
    GET_ONE_CRYPTO_ERROR = "GET_ONE_CRYPTO_ERROR",
    GET_ONE_CRYPTO_SUCCESS = "GET_ONE_CRYPTO_SUCCESS"
}

export enum walletCryptoActionTypes {
    ADD_CRYPTO_TO_WALLET = "ADD_CRYPTO_TO_WALLET",
    REMOVE_CRYPTO_FROM_WALLET = "REMOVE_CRYPTO_FROM_WALLET"
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

interface getOneCryptoAction {
    type: oneCryptoActionTypes.GET_ONE_CRYPTO
}

interface getOneCryptoErrorAction {
    type: oneCryptoActionTypes.GET_ONE_CRYPTO_ERROR;
    payload: string
}

interface getOneCryptoSuccessAction {
    type: oneCryptoActionTypes.GET_ONE_CRYPTO_SUCCESS;
    payload: any[]
}

interface getCryptoWalletAction {
    type: walletCryptoActionTypes.ADD_CRYPTO_TO_WALLET;
    payload: any
}

interface removeCryptoWalletAction {
    type: walletCryptoActionTypes.REMOVE_CRYPTO_FROM_WALLET;
    payload: any
}

export type OneCryptoAction = getOneCryptoAction | getOneCryptoErrorAction | getOneCryptoSuccessAction

export type CryptoAction = getAllCryptoAction | getAllCryptoErrorAction | getAllCryptoSuccessAction

export type WalletCryptoAction = getCryptoWalletAction | removeCryptoWalletAction