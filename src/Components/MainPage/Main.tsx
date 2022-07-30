import React, { useEffect } from "react"
import convertNumber from "../../helper/convertNumbers";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Main: React.FC = () => {
    const { allCrypto, loading, error } = useTypedSelector(state => state.crypto)
    const {getAllCrypto} = useAction()
    useEffect(() => {
        getAllCrypto()  
    }, [])
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }    
    
    
    return (
        <main>
            <table>
                <thead>
                    <tr>
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
                            <tr key={crypto.rank}>
                                <td>{crypto.rank}</td>
                                <td>{crypto.name}</td>
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
        </main>
    )
}

export default Main