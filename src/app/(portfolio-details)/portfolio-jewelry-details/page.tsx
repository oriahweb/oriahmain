import React from "react";
import { Metadata } from "next";
import PortfolioJewelryDetails from "@/pages/portfolio/details/portfolio-jewelry-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioJewelryDetailsPage = () => {
  return (
    <PortfolioJewelryDetails/>
  );
};

export default PortfolioJewelryDetailsPage;
