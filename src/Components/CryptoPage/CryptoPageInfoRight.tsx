import React from "react";

const CryptoPageInfoRight:React.FC<any> = ({ crypto } : any) => {
  return (
    <div className="crypto__info__right">
      <div className="supply right__cont">
        <h3>Supply:</h3>
        <p>${Number(crypto.supply).toLocaleString("ru")}</p>
        <h3>Max Supply:</h3>
        <p>${Number(crypto.maxSupply).toLocaleString("ru")}</p>
      </div>
      <div className="market-cap right__cont">
        <h3>Market cap</h3>
        <p>${Number(crypto.marketCapUsd).toLocaleString("ru")}</p>
      </div>
      <div className="volume right__cont">
        <h3>Volume in 24h:</h3>
        <p>${Number(crypto.volumeUsd24Hr).toLocaleString("ru")}</p>
      </div>
      <div className="change right__cont">
        <h3>Changed in 24h:</h3>
        <p>{Number(crypto.changePercent24Hr).toFixed(2)}%</p>
      </div>
      <div className="volume right__cont">
        <h3>Volume in 24h:</h3>
        <p>${Number(crypto.volumeUsd24Hr).toLocaleString("ru")}</p>
      </div>
      <div className="vwap right__cont">
        <h3>VWAP in 24h:</h3>
        <p>${Number(crypto.vwap24Hr).toLocaleString("ru")}</p>
      </div>
    </div>
  );
};

export default CryptoPageInfoRight;
