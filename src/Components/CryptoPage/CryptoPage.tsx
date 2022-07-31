import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CryptoCont from "./CryptoCont";

const CryptoPage:React.FC = () => {
    const { id } = useParams()
    const { crypto, loading, error } = useTypedSelector(state => state.oneCrypto)
    const { getOneCrypto } = useAction()
    useEffect(() => {
        getOneCrypto(id)  
    }, [])
    console.log(id, crypto);
    
    return (
        <>
            {
                crypto && crypto.length != 0 ? <CryptoCont crypto={crypto} id={id}/> : "Not found"
            }
        </>
    )
}

export default CryptoPage