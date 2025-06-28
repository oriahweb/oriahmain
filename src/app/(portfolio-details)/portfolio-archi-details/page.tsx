import React from "react";
import { Metadata } from "next";
import PortfolioArchiDetails from "@/pages/portfolio/details/portfolio-archi-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioArchiDetailsPage = () => {
  return (
    <PortfolioArchiDetails/>
  );
};

export default PortfolioArchiDetailsPage;
