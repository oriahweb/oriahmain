import React from "react";
import { Metadata } from "next";
import PortfolioGaroaDetails from "@/pages/portfolio/details/portfolio-garoa-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioGaroaDetailsPage = () => {
  return (
    <PortfolioGaroaDetails/>
  );
};

export default PortfolioGaroaDetailsPage;
