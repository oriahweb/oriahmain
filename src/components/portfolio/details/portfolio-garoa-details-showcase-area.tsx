import React from "react";
import { scroller } from "react-scroll";

export default function PortfolioGaroaDetailsShowcaseArea() {
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
              "url(/assets/img/inner-project/showcase/garoa_inner.png)",
          }}
        >
          <div className="tp-showcase-details-scroll smooth">
            <a
              onClick={scrollTo}
              className="pointer"
              style={{ color: "#ffe5d9" }}
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
                    style={{ color: "#ffe5d9" }}
                  >
                    [ UI, Design Web, Image de marque, Commerce électronique ]
                  </span>
                  <h4
                    className="port-showcase-slider-title tp-char-animation"
                    style={{ color: "#ffe5d9" }}
                  >
                    Garoa <br /> Skincare
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
                  Garoa Skincare nous a approché pour développer une plateforme
                  e-commerce sophistiquée qui met en valeur leur gamme de
                  produits de soins naturels. Notre objectif était de créer une
                  expérience en ligne luxueuse qui reflète la qualité premium de
                  leurs produits tout en facilitant le parcours d&apos;achat des
                  clients.
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
                          <span>Garoa Skincare</span>
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
                          <span>Design Web / Commerce électronique</span>
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
                          <span>New York, États-Unis</span>
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
                  Le principal défi était de créer une plateforme e-commerce qui
                  allie élégance visuelle et efficacité fonctionnelle. Nous
                  devions mettre en avant la philosophie naturelle et durable de
                  Garoa Skincare tout en offrant une expérience d&apos;achat fluide
                  et sécurisée. Notre solution combine un design épuré avec des
                  fonctionnalités e-commerce avancées, créant ainsi une
                  expérience en ligne qui reflète parfaitement le positionnement
                  haut de gamme de la marque.
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
