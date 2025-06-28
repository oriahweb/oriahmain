import React from "react";
import { Metadata } from "next";
import PortfolioRefitDetails from "@/pages/portfolio/details/portfolio-refit-details";

export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioRefitPage = () => {
  return (
    <PortfolioRefitDetails/>
  );
};

export default PortfolioRefitPage;
