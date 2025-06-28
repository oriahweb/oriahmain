import React from "react";
import { scroller } from "react-scroll";

export default function PortfolioKingDetailsShowcaseArea() {
  const scrollTo = () => {
    scroller.scrollTo("xyz", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      {/* details area */}
      <div className="tp-showcase-details-area">
        <div
          className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative"
          style={{
            backgroundImage:
              "url(/assets/img/inner-project/showcase/king_inner.png)",
          }}
        >
          <div className="tp-showcase-details-scroll smooth">
            <a
              onClick={scrollTo}
              className="pointer"
              style={{ color: "#b5c9c3" }}
            >
              <i className="fa-sharp fa-light fa-angle-down"></i>
              Défiler ou glisser pour naviguer
            </a>
          </div>
          <div className="port-showcase-slider-social tp-hover-btn-wrapper">
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              Fb
            </a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              In
            </a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">
              Be
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-showcase-details-content text-center">
                  <span
                    className="port-showcase-slider-subtitle tp_title_anim"
                    style={{ color: "#b5c9c3" }}
                  >
                    [ UI, Design Web, Image de marque, Entreprise locale ]
                  </span>
                  <h4
                    className="port-showcase-slider-title tp-char-animation"
                    style={{ color: "#b5c9c3" }}
                  >
                    King Tree <br /> Services
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle">Aperçu</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim">
                  King Tree Services nous a approché pour développer une
                  présence web professionnelle qui met en valeur leurs services
                  d&apos;entretien et de soins des arbres. Notre objectif était de
                  créer une plateforme en ligne fiable qui reflète leur
                  engagement envers un travail de qualité tout en facilitant
                  l&apos;accès des clients à l&apos;information et aux demandes de
                  services.
                </p>
                <div className="showcase-details-overview-info">
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Client</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>King Tree Services</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Services</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>Design Web / Image de marque</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Localisation</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>Californie, États-Unis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Date de lancement</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>Janvier {"2024"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}

      {/* details overview */}
      <div className="showcase-details-overview pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle fs-40 tp-char-animation">
                  Le défi
                </span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right tp_title_anim">
                <p>
                  Le principal défi était de créer un site web qui communique
                  efficacement l&apos;expertise et le professionnalisme de King Tree
                  Services dans le domaine des soins aux arbres. Nous devions
                  mettre en valeur leurs services complets tout en établissant
                  la confiance avec les clients potentiels grâce à des
                  informations claires et une interface facile à utiliser. Notre
                  solution combine des visuels attrayants de leur travail avec
                  des fonctionnalités optimisées, créant une présence en ligne
                  qui représente parfaitement leur engagement envers des
                  services d&apos;entretien d&apos;arbres de qualité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}
    </>
  );
}
