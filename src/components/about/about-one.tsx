"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import ab_1 from "@/assets/img/home-02/about/abt5.jpg";
import ab_2 from "@/assets/img/home-02/about/abt2.png";
import ab_3 from "@/assets/img/home-02/about/abt1.png";

// img style
const imgStyle: CSSProperties = { height: "auto" };
const AboutOne = () => {
  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                Parce que nous tenons à vous, nous créons des sites web qui
                reflètent votre marque avec élégance.
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image src={ab_1} alt="ab-img" style={imgStyle} />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image src={ab_2} alt="ab-img" style={imgStyle} />
                <span className="tp-about-2-thumb-text">
                  Créer des marques avec intention et précision.
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content" style={{ textAlign:'justify'}}>
              <span>Votre vision. Notre mission digitale.</span>
              <p className="mb-30">
                Installés à Paris, nous accompagnons toutes sortes d'entreprises
                dans leur transformation digitale. De la création de sites web
                au référencement SEO, nous vous offrons des solutions sur
                mesure. Chaque projet est abordé comme s'il était le nôtre —
                avec passion, précision et vision.
              </p>
              <p className="mb-0">
              Nous prenons le temps de comprendre votre marque avant de créer.
              Parce que quelque chose de grand est sur le point d'arriver.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-2 order-1">
            <div className="text-md-end text-center">
              <Image
                src={ab_3}
                alt="ab-img"
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
