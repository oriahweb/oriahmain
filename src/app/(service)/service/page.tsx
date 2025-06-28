import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Oria Consulting - Nos Services",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
