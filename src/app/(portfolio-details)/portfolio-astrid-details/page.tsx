import React from "react";
import { Metadata } from "next";
import PortfolioAstridDetails from "@/pages/portfolio/details/portfolio-astrid-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioAstridDetailsPage = () => {
  return (
    <PortfolioAstridDetails/>
  );
};

export default PortfolioAstridDetailsPage;
