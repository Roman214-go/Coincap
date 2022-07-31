import React, { useEffect } from "react"
import convertNumber from "../../helper/convertNumbers";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from 'react-router-dom'



const Main: React.FC = () => {
    const { allCrypto, loading, error } = useTypedSelector(state => state.crypto)
    const {getAllCrypto, changeWallet} = useAction()
    useEffect(() => {
        getAllCrypto()  
    }, [])
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }    
    
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Rate</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Market capitalization</td>
                        <td>VWAP</td>
                        <td>Available resources</td>
                        <td>Volume</td>
                        <td>Change</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCrypto && allCrypto.map(crypto => (
                            <tr key={crypto.id}>
                                <td><button className="button__add-crypto" onClick={() => changeWallet(crypto)}>+</button></td>
                                <td>{crypto.rank}</td>
                                <td>
                                    <Link to={`crypto/${crypto.id}`}>
                                        <span className="tabel__name">
                                            <p>{crypto.name}</p>
                                            <p>{crypto.symbol}</p>
                                        </span>
                                    </ Link>
                                </td>
                                <td>${convertNumber(crypto.priceUsd)}</td>
                                <td>${convertNumber(crypto.marketCapUsd)}</td>
                                <td>${convertNumber(crypto.vwap24Hr)}</td>
                                <td>${convertNumber(crypto.supply)}</td>
                                <td>${convertNumber(crypto.volumeUsd24Hr)}</td>
                                <td>{convertNumber(crypto.changePercent24Hr)}%</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Main