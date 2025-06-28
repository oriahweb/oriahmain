import React from "react";
import { Metadata } from "next";
import PortfolioStilletoDetails from "@/pages/portfolio/details/portfolio-stilleto-details";

export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioStilletoDetailsPage = () => {
  return (
    <PortfolioStilletoDetails/>
  );
};

export default PortfolioStilletoDetailsPage;
