import React from "react";
import { ICryptoCont } from "../../types/Crypto";
import CryptoGraph from "./CryptoGraph";
import CryptoPageInfoLeft from "./CryptoPageInfoLeft";
import CryptoPageInfoRight from "./CryptoPageInfoRight";

const CryptoCont:React.FC<ICryptoCont> = ({ crypto, id }: ICryptoCont) => {
  return (
    <>
      <div className="crypto__info__cont">
        <CryptoPageInfoLeft crypto={crypto}/>
        <CryptoPageInfoRight crypto={crypto}/>
      </div>
      <div className="crypto__graph">
        <CryptoGraph id={id}/>
      </div>
    </>
  );
};

export default CryptoCont;
