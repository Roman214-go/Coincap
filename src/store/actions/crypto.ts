import axios from "axios";
import { Dispatch } from "redux";
import {
  CryptoAction,
  cryptoActionTypes,
  getCryptoHistoryAction,
  GET_CRYPTO_HISTORY,
  OneCryptoAction,
  oneCryptoActionTypes,
  oneCryptoType,
  WalletCryptoAction,
  walletCryptoActionTypes,
} from "../../types/Crypto";

export const getAllCrypto = () => {
  return async (dispatch: Dispatch<CryptoAction>) => {
    try {
      dispatch({ type: cryptoActionTypes.GET_ALL_CRYPTO });
      const response = await axios.get("https://api.coincap.io/v2/assets").then((res) => res.data.data);
      dispatch({ type: cryptoActionTypes.GET_ALL_CRYPTO_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: cryptoActionTypes.GET_ALL_CRYPTO_ERROR, payload: "Error " });
    }
  };
};

export const getOneCrypto = (id: string | undefined) => {
  return async (disptch: Dispatch<OneCryptoAction>) => {
    try {
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO });
      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`).then((res) => res.data.data);
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO_SUCCESS, payload: response });
    } catch (e) {
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO_ERROR, payload: "Error" });
    }
  };
};

export const changeWallet = (crypto: oneCryptoType) => {
  return (dispatch: Dispatch<WalletCryptoAction>) => {
    console.log(crypto);
    dispatch({ type: walletCryptoActionTypes.ADD_CRYPTO_TO_WALLET, payload: crypto });
  };
};

export const getCryptoHistory = (id: string | undefined) => {
  return async (dispatch: Dispatch<getCryptoHistoryAction>) => {
    try {
      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
          .then((res) => res.data.data);
      dispatch({ type: GET_CRYPTO_HISTORY, payload: response });
    } catch (e) {
      console.log(e);
    }
  };
};
