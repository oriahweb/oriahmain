import React from "react";
import { Metadata } from "next";
import PortfolioCreatiqDetails from "@/pages/portfolio/details/portfolio-creatiq-details";

export const metadata: Metadata = {
  title: "Oria Consulting - Page de détails du portfolio",
};

const PortfolioCreatiqDetailsPage = () => {
  return (
    <PortfolioCreatiqDetails/>
  );
};

export default PortfolioCreatiqDetailsPage;
