import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(/assets/img/inner-about/hero/hero5.png)"}}
    >
      <div className="breadcurmb-site d-none">
        <h6>A Propos de Nous</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Défiler pour explorer
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Agence de <br /> création digitale
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Créer une présence digitale
              </h1>
              <p>Expériences digitales avec un impact émotionnel maximum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
