import React from "react";
import Hero from "./Hero";
import TrendingStocks from "./TredingStocks";
import SectorPerformance from "./SectorPerformance";
import MarketInsights from "./MarketInsights";
import OpenAccount from "../OpenAccount";

function MarketPage() {
  return (
    <>
      <Hero />
      <TrendingStocks />
      <SectorPerformance />
      <MarketInsights />
      <OpenAccount />
    </>
  );
}

export default MarketPage;
