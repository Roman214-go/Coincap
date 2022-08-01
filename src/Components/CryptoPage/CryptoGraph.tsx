import React, { useEffect } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICryptoGraph } from "../../types/Crypto";

const CryptoGraph:React.FC<ICryptoGraph> = ({ id } : ICryptoGraph) => {
  const { cryptoHistory } = useTypedSelector((state) => state.cryptoHistory);
  const { getCryptoHistory } = useAction();
  useEffect(() => {
    getCryptoHistory(id);
  }, []);
  return (
    <LineChart
      width={1200}
      height={400}
      data={cryptoHistory}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="priceUsd" stroke="#111111" strokeWidth={1.5}
        activeDot={{ r: 4 }} dot={false}/>
    </LineChart>
  );
};

export default CryptoGraph;
