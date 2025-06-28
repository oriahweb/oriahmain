import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

const pricing_data = [
  {
    id: 1,
    bg: "/assets/img/price/pricebg1.png",
    title: "Norme d'achat de médias",
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
    bg: "/assets/img/price/pricebg2.jpg",
    title: "Achat de médias avancé",
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
    bg: "/assets/img/price/pricebg3.jpg",
    title: "Achat de médias Premium",
    price: 1000,
    features: [
      "Campagne publicitaire sur 3 produits ou services",
      "Analyse avancée de l'audience cible",
      "Création des créatives et A/B testing",
      "Analyse avancée du ROI",
      "Ajustements stratégiques en cours de campagne",
    ],
  },
  {
    id: 4,
    bg: "/assets/img/price/pricebg1.png",
    title: "Création de site internet Standart",
    price: 1099,
    features: [
      "Site Web 3-5 Pages",
      "Design Adaptatif",
      "Formulaires de contact",
      "Fonctionnalités Essentielles",
      "Optimisation de Base",
    ],
  },
  {
    id: 5,
    bg: "/assets/img/price/pricebg2.jpg",
    title: "Création de site internet Avancé",
    price: 1399,
    features: [
      "Optimisation SEO",
      "CMS Avancé",
      "Animations Personnalisées",
      "Support Premium",
      "Optimisation des Performances",

    ],
  },
  {
    id: 6,
    bg: "/assets/img/price/pricebg3.jpg",
    title: "Création de site internet Premium",
    price: 1599,
    features: [
      "Développement sur mesure",
      "Fonctionnalités Avancées",
      "Intégrations Personnalisées",
      "Support Prioritaire",
      "Solutions Scalables",

    ],
  },
  {
    id: 7,
    bg: "/assets/img/price/pricebg1.png",
    title: "E-commerce Standart",
    price: 1299,
    features: [
      "Boutique en ligne simple",
      "10-20 Produits",
      "WooCommerce/Shopify",
      "Paiement Basique",
      "Support de Base",

    ],
  },
  {
    id: 8,
    bg: "/assets/img/price/pricebg2.jpg",
    title: "E-commerce Avancé",
    price: 1499,
    features: [
      "Gestion de Stock Avancée",
      "Automatisation des Processus",
      "Systèmes de Paiement Sécurisés",
      "Intégration de Chatbot",
      "Support Premium",

    ],
  },
  {
    id: 9,
    bg: "/assets/img/price/pricebg3.jpg",
    title: "E-commerce Premium",
    price: 1799,
    features: [
      "Développement sur mesure",
      "Fonctionnalités Avancées",
      "Intégrations Personnalisées",
      "Support Prioritaire",
      "Solutions Scalables",
    ],
  },
  {
    id: 10,
    bg: "/assets/img/price/pricebg1.png",
    title: "SEO Optimisation Standart",
    price: 300,
    features: [
      "Audit SEO",
      "Optimisation Technique",
      "5 Mots-clés cible",
      "Rapports Mensuels",
      "Support de Base",
    ],
  },
  {
    id: 11  ,
    bg: "/assets/img/price/pricebg2.jpg",
    title: "SEO Optimisation Avancé",
    price: 600,
    features: [
      "Stratégie de contenu",
      "Link Building",
      "3-Month Tracking",
      "Analyse des concurrents",
      "Support Premium",
    ],
  },
  {
    id: 12,
    bg: "/assets/img/price/pricebg3.jpg",
    title: "SEO Optimisation Premium",
    price: 800,
    features: [
      "Stratégie SEO complète",
      "SEO International",
      "SEO E-commerce",
      "Reporting personnalisé",
      "Support Prioritaire",
    ],
  },  {
    id: 13,
    bg: "/assets/img/price/pricebg1.png",
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
    bg: "/assets/img/price/pricebg2.jpg",
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
  {
    id: 15,
    bg: "/assets/img/price/pricebg3.jpg",
    title: "Chatbot IA Premium",
    price: 1299,
    features: [
      "Développement sur mesure",
      "Fonctionnalités Avancées",
      "Intégrations Personnalisées",
      "Support Prioritaire",
      "Solutions Scalables",
    ],
  },
];

export default function PricingArea() {
  return (
    <div className="tp-price-area">
      <div className="container">
        <div className="row">
          {pricing_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className={`tp-price-item ${item.id === 2 ? "active" : ""}`}
                style={{
                  backgroundImage: item.id === 2 ? `url(${item.bg})` : "",
                }}
              >
                <div
                  className="tp-price-head"
                  style={{
                    backgroundImage: item.id !== 2 ? `url(${item.bg})` : "",
                  }}
                >
                  <span>#{item.id}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly">
                  €<i>{item.price}</i>/ une fois
                  </span>
                  <div className="tp-price-list">
                    <ul>
                      {item.features.map((l, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={`tp-btn-black-md ${item.id===2?"white-bg":""} w-100 text-center`}
                    href="/contact"
                  >
                    Choose Plan
                    <span>
                      <UpArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
