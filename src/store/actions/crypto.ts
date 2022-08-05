import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  CryptoAction,
  cryptoActionTypes,
  cryptoHistoryType,
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
      const response = await axios
          .get<AxiosResponse<Array<oneCryptoType>>>("https://api.coincap.io/v2/assets");
      dispatch({ type: cryptoActionTypes.GET_ALL_CRYPTO_SUCCESS, payload: response.data.data });
    } catch (e) {
      dispatch({ type: cryptoActionTypes.GET_ALL_CRYPTO_ERROR, payload: "Error " });
    }
  };
};

export const getOneCrypto = (id: string | undefined) => {
  return async (disptch: Dispatch<OneCryptoAction>) => {
    try {
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO });
      const response = await axios
          .get<AxiosResponse<oneCryptoType>>(`https://api.coincap.io/v2/assets/${id}`);
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO_SUCCESS, payload: response.data.data });
    } catch (e) {
      disptch({ type: oneCryptoActionTypes.GET_ONE_CRYPTO_ERROR, payload: "Error" });
    }
  };
};

export const changeWallet = (crypto: oneCryptoType) => {
  return (dispatch: Dispatch<WalletCryptoAction>) => {
    dispatch({ type: walletCryptoActionTypes.ADD_CRYPTO_TO_WALLET, payload: crypto });
  };
};

export const getCryptoHistory = (id: string | undefined) => {
  return async (dispatch: Dispatch<getCryptoHistoryAction>) => {
    try {
      const response = await axios
          .get<AxiosResponse<Array<cryptoHistoryType>>>(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);
      dispatch({ type: GET_CRYPTO_HISTORY, payload: response.data.data });
    } catch (e) {
      console.log(e);
    }
  };
};
