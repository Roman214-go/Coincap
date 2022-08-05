export interface oneCryptoType {
    id?: string,
    rank?: string,
    symbol?: string,
    name?: string,
    supply?: string,
    maxSupply?: string,
    marketCapUsd?: string,
    volumeUsd24Hr?: string,
    priceUsd?: string,
    changePercent24Hr?: string,
    vwap24Hr?: string,
    explorer?: string
}

export interface cryptoHistoryType {
    priceUsd: string,
    time: number,
    date: string
}

export interface CryptoState {
    allCrypto: Array<oneCryptoType>;
    loading: boolean;
    error: null | string;
}

export interface CryptoHistoryState {
    cryptoHistory: Array<cryptoHistoryType>
}

export interface OneCryptoState {
    crypto: oneCryptoType;
    loading: boolean;
    error: null | string;
}


export interface WalletCryptoState {
    walletCrypto: Array<oneCryptoType>,
    totalPrice: number,
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
    payload: Array<oneCryptoType>
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
    payload: oneCryptoType
}

interface getCryptoWalletAction {
    type: walletCryptoActionTypes.ADD_CRYPTO_TO_WALLET;
    payload: oneCryptoType
}

interface removeCryptoWalletAction {
    type: walletCryptoActionTypes.REMOVE_CRYPTO_FROM_WALLET;
    payload: oneCryptoType
}

export interface getCryptoHistoryAction {
    type: "GET_CRYPTO_HISTORY";
    payload: Array<cryptoHistoryType>
}

export interface ICryptoCont {
    crypto: oneCryptoType,
    id: string | undefined
}

export interface IHeaderPopularCrypto {
    popularCrypto: Array<oneCryptoType>
}

export interface ICryptoPageInfoLeft {
    crypto: oneCryptoType
}

export interface ICryptoGraph {
    id: string | undefined
};

export type OneCryptoAction = getOneCryptoAction | getOneCryptoErrorAction | getOneCryptoSuccessAction

export type CryptoAction = getAllCryptoAction | getAllCryptoErrorAction | getAllCryptoSuccessAction

export type WalletCryptoAction = getCryptoWalletAction | removeCryptoWalletAction

const GET_CRYPTO_HISTORY = "GET_CRYPTO_HISTORY";
export { GET_CRYPTO_HISTORY };
