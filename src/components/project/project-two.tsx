"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const project_data = [
  {
    id: 1,
    img: "/assets/img/home-02/project/project7.jpg",
    subtitle: "Site Web",
    title: "Vitrine & E-commerce",
  },
  {
    id: 2,
    img: "/assets/img/home-02/project/project2.jpg",
    subtitle: "Identité Visuelle",
    title: "Branding",
  },
  {
    id: 3,
    img: "/assets/img/home-02/project/project3.jpg",
    subtitle: "Création Graphique",
    title: "Contenus Créatifs",
  },
  {
    id: 4,
    img: "/assets/img/home-02/project/project4.jpg",
    subtitle: "Référencement",
    title: "SEO & Visibilité",
  },
  {
    id: 5,
    img: "/assets/img/home-02/project/project5.jpg",
    subtitle: "Développement",
    title: "Solutions sur Mesure",
  },
  {
    id: 6,
    img: "/assets/img/home-02/project/project6.jpg",
    subtitle: "Publicité",
    title: "Campagnes Meta Ads",
  },
  {
    id: 7,
    img: "/assets/img/home-02/project/project8.jpg",
    subtitle: "Stratégie Digitale",
    title: "Croissance Business",
  },
];


export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} priority />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
