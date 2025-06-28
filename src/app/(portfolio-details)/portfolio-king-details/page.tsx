import React from "react";
import { Metadata } from "next";
import PortfolioKingDetails from "@/pages/portfolio/details/portfolio-king-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioKingDetailsPage = () => {
  return (
    <PortfolioKingDetails/>
  );
};

export default PortfolioKingDetailsPage;
