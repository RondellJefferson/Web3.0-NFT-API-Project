import "../styles.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import CollectionCard from "./CollectionCar";
import axios from "axios";
import PunkList from "./PunkList";
import Main from "./Main";

export default function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x73EfABA799bB77ff5593faA7E65A157d436E61FE&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets)
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
      <div>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList 
        punkListData={punkListData}
        setSelectedPunk={setSelectedPunk}
        /> 
      </div>  
      )}
    </div>
  );
}
