import React from "react";

const CryptoPageInfoRight:React.FC<any> = ({ crypto } : any) => {
  return (
    <div className="crypto__info__right">
      <div className="crypto__info__supply crypto__info__right__cont">
        <h3>Supply:</h3>
        <p>${Number(crypto.supply).toLocaleString("ru")}</p>
        <h3>Max Supply:</h3>
        <p>${Number(crypto.maxSupply).toLocaleString("ru")}</p>
      </div>
      <div className="crypto__info__market-cap crypto__info__right__cont">
        <h3>Market cap</h3>
        <p>${Number(crypto.marketCapUsd).toLocaleString("ru")}</p>
      </div>
      <div className="crypto__info__volume crypto__info__right__cont">
        <h3>Volume in 24h:</h3>
        <p>${Number(crypto.volumeUsd24Hr).toLocaleString("ru")}</p>
      </div>
      <div className="crypto__info__change crypto__info__right__cont">
        <h3>Changed in 24h:</h3>
        <p>{Number(crypto.changePercent24Hr).toFixed(2)}%</p>
      </div>
      <div className="crypto__info__volume crypto__info__right__cont">
        <h3>Volume in 24h:</h3>
        <p>${Number(crypto.volumeUsd24Hr).toLocaleString("ru")}</p>
      </div>
      <div className="crypto__info__vwap crypto__info__right__cont">
        <h3>VWAP in 24h:</h3>
        <p>${Number(crypto.vwap24Hr).toLocaleString("ru")}</p>
      </div>
    </div>
  );
};

export default CryptoPageInfoRight;
