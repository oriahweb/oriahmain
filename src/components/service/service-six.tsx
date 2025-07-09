import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/logoSer.png";
import ser_img_2 from "@/assets/img/inner-service/service/SiteSer.png";
import ser_img_3 from "@/assets/img/inner-service/service/seoSer.png";
import ser_img_4 from "@/assets/img/inner-service/service/chatSer.png";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Médias numériques",
    title: "Media Buying (Publicité)",
    text: "Nous concevons et exécutons des campagnes publicitaires précises pour un produit ou service, en maximisant votre retour sur investissement grâce à une analyse stratégique et des ajustements en temps réel.",
    lists: [
      "Campagne publicitaire ciblée",
      "Analyse avancée de l'audience",
      "Création de visuels & A/B Testing",
      "Analyse ROI et ajustements stratégiques",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Studio Web",
    title: "Sites Web & E-commerce",
    text: "Nous créons des sites vitrines et e-commerce sur mesure, élégants et fonctionnels, pour donner vie à votre activité en ligne avec une touche design à la française.",
    lists: [
      "Site vitrine sur mesure",
      "Plateforme e-commerce",
      "Expérience utilisateur optimisée",
      "Responsive design & sécurité",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Référencement & Ads",
    title: "SEO",
    text: "Boostez votre visibilité sur les moteurs de recherche et les réseaux sociaux grâce à un référencement naturel performant.",
    lists: [
      "Optimisation SEO technique et contenu",
      "Campagnes Meta Ads ciblées",
      "Recherche de mots-clés stratégique",
      "Suivi et reporting détaillé",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "IA Conversationnelle",
    title: "Chatbot & IA",
    text: "Améliorez l'engagement client avec des chatbots intelligents et automatisés. Une solution moderne pour un service rapide, 24h/24, avec une touche humaine.",
    lists: [
      "Création de chatbot personnalisé",
      "Automatisation des réponses",
      "Intégration IA & NLP",
      "Support client 24/7",
    ],
  },
];


export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/contact"
                        >
                          <span className="zikzak-content">
                           Appelez-nous<br />
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
