import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";

// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-one.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
import ser_5 from "@/assets/img/home-02/service/sv-icon-5.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Site Vitrine / Site E-commerce",
    desc: "Nous créons des sites vitrines professionnels qui renforcent votre image et séduisent votre audience. Et pour aller plus loin, nous concevons et gérons votre boutique en ligne.",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Référencement SEO",
    desc: "Nous proposons des stratégies pour augmenter votre classement dans les résultats de recherche et attirer un trafic qualifié sur votre site.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Création de Créatives",
    desc: "Nous concevons des créations graphiques sur mesure qui captivent votre audience et maximisent votre retour sur investissement publicitaire.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Gestion de Campagne Publicitaire",
    desc: "Nous élaborons et gérons des stratégies publicitaires Meta Ads, de la planification à l'optimisation.",
  },
  {
    id: 5,
    icon: ser_5,
    title: "Création de Chatbot IA",
    desc: "Grâce à notre savoir-faire en automatisation IA via les chatbots, offrez à vos clients une expérience utilisateur exceptionnelle et une assistance 24/7.",
  },
];

export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt pb-100 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Nos Services
              </span>
              <h4 className="tp-section-title-40">
                Proposez une large gamme de services pour aider les entreprises 
                à établir et à renforcer leur présence en ligne.
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded={s.id === 1 ? "true" : "false"}
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
