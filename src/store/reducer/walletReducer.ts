import convertNumber from "../../helper/convertNumbers"
import { WalletCryptoAction, walletCryptoActionTypes, WalletCryptoState } from "../../types/Crypto"


const initialState: WalletCryptoState = {
    walletCrypto: [],
    totalPrice: 0,
    exchange: 0,
}


export const walletReducer = (state = initialState, action: WalletCryptoAction): WalletCryptoState => {
    switch(action.type) {
        case walletCryptoActionTypes.ADD_CRYPTO_TO_WALLET:
            return {
                walletCrypto: [...state.walletCrypto, action.payload],
                exchange: Math.abs((state.totalPrice + +(convertNumber(action.payload.priceUsd)) - state.totalPrice))/state.totalPrice*100,
                totalPrice: state.totalPrice + +(convertNumber(action.payload.priceUsd)),
            }
        case walletCryptoActionTypes.REMOVE_CRYPTO_FROM_WALLET:
            return {
                walletCrypto: action.payload,
                totalPrice: 1,
                exchange: 1,
            }
        default:
            return state
    }
}