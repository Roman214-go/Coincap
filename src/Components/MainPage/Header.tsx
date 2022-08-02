import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import HeaderPopularCrypto from "./HeaderPopularCrypto";
import HeaderProfile from "./HeaderProfile";

const Header:React.FC = () => {
  const { allCrypto } = useTypedSelector((state) => state.crypto);
  const { getAllCrypto } = useAction();
  useEffect(() => {
    getAllCrypto();
  }, []);
  return (
    <header>
      <div className="header__layout">
        <div className="logo header__logo"><Link to="/">CoinCap</Link></div>
        <div className="header__popular-crypto">
          {
            allCrypto.length != 0 && <HeaderPopularCrypto popularCrypto={allCrypto}/>
          }
        </div>
        <HeaderProfile />
      </div>
    </header>
  );
};

export default Header;
