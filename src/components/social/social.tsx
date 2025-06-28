import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";

const social_data = [
  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/oriahconsulting/",
  },
  {
    id: 4,
    icon: <Facebook />,
    link: "https://www.facebook.com/oriahconsulting/",
  },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
