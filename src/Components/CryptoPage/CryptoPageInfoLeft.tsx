import React from "react";
import convertNumber from "../../helper/convertNumbers";
import { ICryptoPageInfoLeft } from "../../types/Crypto";

const CryptoPageInfoLeft:React.FC<ICryptoPageInfoLeft> = ({ crypto } : ICryptoPageInfoLeft) => {
  console.log(crypto);

  return (
    <div className="crypto__info__left">
      <div className="crypto__info__left__name crypto__info__left__cont">
        <h1>{crypto.name}</h1>
        <p>{crypto.symbol}</p>
        <button className="button__add-crypto crypto__info__left__button">+</button>
      </div>
      <div className="crypto__info__left__price crypto__info__left__cont">
        <h3>Price:</h3>
        <p style={{ fontWeight: "700" }}>${convertNumber(crypto.priceUsd)}</p>
      </div>
      <a href={crypto.explorer} target="_blank" rel="noreferrer">Explore</a>
    </div>
  );
};

export default CryptoPageInfoLeft;
