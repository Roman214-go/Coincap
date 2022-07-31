import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CryptoPage from "./Components/CryptoPage/CryptoPage";
import Layout from "./Components/Layout";
import Main from "./Components/MainPage/Main";

function App() {
  const path = useLocation()
  useEffect(() => 
    window.scrollTo(0, 0)
  , [path])
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="crypto/:id" element={<CryptoPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
