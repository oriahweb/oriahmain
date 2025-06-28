import React from "react";
import { Metadata } from "next";
import PortfolioHealixDetails from "@/pages/portfolio/details/portfolio-healix-details";

export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioHealixDetailsPage = () => {
  return (
    <PortfolioHealixDetails/>
  );
};

export default PortfolioHealixDetailsPage;
