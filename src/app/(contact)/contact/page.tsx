import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Oria Consulting - Contactez-nous",
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
