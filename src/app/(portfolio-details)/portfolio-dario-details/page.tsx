import React from "react";
import { Metadata } from "next";
import PortfolioDarioDetails from "@/pages/portfolio/details/portfolio-dario-details";


export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioDarioDetailsPage = () => {
  return (
    <PortfolioDarioDetails/>
  );
};

export default PortfolioDarioDetailsPage;
