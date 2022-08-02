import React from "react";
import convertNumber from "../../helper/convertNumbers";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HeaderProfile:React.FC = () => {
  const { totalPrice, exchange } = useTypedSelector((state) => state.wallet);
  console.log(totalPrice);

  return (
    <div className="header__profile">
      <span>${convertNumber(totalPrice)}</span>
      <span>{exchange === Infinity ? (0).toFixed(2) : exchange.toFixed(2)}%</span>
      <span>Wallet</span>
    </div>
  );
};

export default HeaderProfile;
