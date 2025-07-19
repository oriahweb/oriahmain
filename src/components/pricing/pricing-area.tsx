import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

// Grouped pricing data by service
const mediaBuying = [
  {
    id: 1,
    bg: "/assets/img/price/pricingImage1.png",
    title: "Media Buying Standard",
    price: 600,
    features: [
      "Campagne publicitaire sur 1 produit ou service",
      "Analyse avancée de l'audience cible",
      "Création des créatives et A/B testing",
      "Analyse avancée du ROI",
      "Ajustements stratégiques en cours de campagne",
    ],
  },
  {
    id: 2,
    bg: "/assets/img/price/pricingImage2.jpg",
    title: "Media Buying Avancé",
    price: 800,
    features: [
      "Campagne publicitaire sur 2 produits ou services",
      "Analyse avancée de l'audience cible",
      "Création des créatives et A/B testing",
      "Analyse avancée du ROI",
      "Ajustements stratégiques en cours de campagne",
    ],
  },
  {
    id: 3,
    bg: "/assets/img/price/pricingImage3.jpg",
    title: "Media Buying Premium",
    price: 1000,
    features: [
      "Campagne publicitaire sur 3 produits ou services",
      "Analyse avancée de l'audience cible",
      "Création des créatives et A/B testing",
      "Analyse avancée du ROI",
      "Ajustements stratégiques en cours de campagne",
    ],
  },
];

const siteWeb = [
  {
    id: 4,
    bg: "/assets/img/price/pricingImage1.png",
    title: "Site vitrine + SE0 (Codé)",
    price: 1099,
    features: [
      "Site vitrine sur mesure et responsive",
      "Conception et codage avancés",
      "Formulaires de contact",
      "Intégration de fonctionnalités spécifiques aux besoins de l'entreprise",
      "Optimisation SEO",
    ],
  },
  {
    id: 5,
    bg: "/assets/img/price/pricingImage2.jpg",
    title: "Site e-commerce + SEO (Codé)",
    price: 1399,
    features: [
      "Site e-commerce sur mesure et responsive",
      "Conception et codage avancés",
      "Intégration de fonctionnalités avancées (gestion des stocks, paiements sécurisés, etc.)",
      "Support Premium",
      "Optimisation des Performances",
    ],
  },
];

const chatbotIA = [
  {
    id: 13,
    bg: "/assets/img/price/pricingImage1.png",
    title: "Chatbot IA Standart",
    price: 699,
    features: [
      "Module de Réservation",
      "Paiements en ligne",
      "Gestion du Calendrier",
      "Notifications de Base",
      "Support de Base",
    ],
  },
  {
    id: 14,
    bg: "/assets/img/price/pricingImage2.jpg",
    title: "Chatbot IA Avancé",
    price: 999,
    features: [
      "Gestion Avancée",
      "Synchronisation de Plateforme",
      "Disponibilité en temps réel",
      "Analyse Avancée",
      "Support Premium",
    ],
  },
];

function PricingCard({ item, highlightId }: { item: any; highlightId?: number }) {
  return (
    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
      <div
        className={`tp-price-item ${item.id === highlightId ? "active" : ""}`}
        style={{
          backgroundImage: item.id === highlightId ? `url(${item.bg})` : "",
        }}
      >
        <div
          className="tp-price-head"
          style={{
            backgroundImage: item.id !== highlightId ? `url(${item.bg})` : "",
          }}
        >
          <span>#{item.id}</span>
          <h5>{item.title}</h5>
        </div>
        <div className="tp-price-body">
          <span className="tp-price-monthly">
            €<i>{item.price}</i>/ par mois
          </span>
          <div className="tp-price-list">
            <ul>
              {item.features.map((l: string, i: number) => (
                <li key={i}>
                  <i className="fa-sharp fa-light fa-check"></i>
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <Link
            className={`tp-btn-black-md ${item.id === highlightId ? "white-bg" : ""} w-100 text-center`}
            href="/contact"
          >
            Choisir ce plan
            <span>
              <UpArrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingArea() {
  return (
    <div className="tp-price-area">
      <div className="container">
        {/* Media Buying Section */}
        <div className="row">
          <div className="col-12 mb-20">
            <h4 className="tp-price-section-title" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Media Buying
            </h4>
          </div>
          {mediaBuying.map((item) => (
            <PricingCard key={item.id} item={item} highlightId={2} />
          ))}
        </div>
        {/* Site Web Section */}
        <div className="row mt-40">
          <div className="col-12 mb-20">
            <h4 className="tp-price-section-title" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Création de Site Web
            </h4>
          </div>
          {siteWeb.map((item) => (
            <PricingCard key={item.id} item={item} />
          ))}
        </div>
        {/* Chatbot IA Section */}
        <div className="row mt-40">
          <div className="col-12 mb-20">
            <h4 className="tp-price-section-title" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Chatbot IA
            </h4>
          </div>
          {chatbotIA.map((item) => (
            <PricingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
