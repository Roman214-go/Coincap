import React from "react"
import convertNumber from "../../helper/convertNumbers"
import { Link } from 'react-router-dom'

const HeaderPopularCrypto:React.FC<any> = ({popularCrypto}: any) => {
    return (
        <>
            <Link to={`crypto/${popularCrypto[0].id}`}>{popularCrypto[0].name} ${convertNumber(popularCrypto[0].priceUsd)}</Link>
            <Link to={`crypto/${popularCrypto[1].id}`}>{popularCrypto[1].name} ${convertNumber(popularCrypto[1].priceUsd)}</Link>
            <Link to={`crypto/${popularCrypto[2].id}`}>{popularCrypto[2].name} ${convertNumber(popularCrypto[2].priceUsd)}</Link>
        </>
    )
}

export default HeaderPopularCrypto