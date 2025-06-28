"use client";
import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// instagram images
import inst_1 from "@/assets/img/home-02/instagram/i8.jpg";
import inst_2 from "@/assets/img/home-02/instagram/i9.jpg";
import inst_3 from "@/assets/img/home-02/instagram/i1.png";
import inst_4 from "@/assets/img/home-02/instagram/i3.png";
import inst_5 from "@/assets/img/home-02/instagram/i6.png";
import inst_6 from "@/assets/img/home-02/instagram/i5.png";
import inst_7 from "@/assets/img/home-02/instagram/i4.png";

export default function InstagramArea() {
  // instagram images
  const instagram_images = [
    { id: 1, img: inst_1 },
    { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    { id: 7, img: inst_7 },
  ];

  return (
    <div className="tp-instagram-area tp-instagram-ptb text-center">
      <div className="tp-instagram-thumb-wrap p-relative">
        {instagram_images.map((item) => (
          <div
            key={item.id}
            className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
          >
            <Image src={item.img} alt="inst-img" />
          </div>
        ))}
        <div className="tp-instagram-thumb-inner-8 d-none d-xl-block">
          <a href="https://www.instagram.com/oriahconsulting">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="tp-instagram-thumb">
          {/* <Image src={inst_8} alt="inst-img" */}
          <img src="/assets/img/home-02/instagram/i2.png" alt="inst-img"/>
        </div>
        <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@oriahconsulting</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Suivez-nous pour faire partie de l&apos;aventure <br /> et mettre votre travail en ligne.
            </p>
            <a className="tp-btn-white background-black" href="https://www.instagram.com/oriahconsulting">
              Suivez-nous
              <span>
                <Leaf />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
