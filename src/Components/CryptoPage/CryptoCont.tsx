import React from "react";
import CryptoPageInfoLeft from "./CryptoPageInfoLeft";
import CryptoPageInfoRight from "./CryptoPageInfoRight";

const CryptoCont:React.FC<any> = ({crypto, id}: any) => {
    return (
        <>
         <div className="crypto__info__cont">
            <CryptoPageInfoLeft crypto={crypto}/>
            <CryptoPageInfoRight crypto={crypto}/>
        </div>
        </>
    )
}

export default CryptoCont