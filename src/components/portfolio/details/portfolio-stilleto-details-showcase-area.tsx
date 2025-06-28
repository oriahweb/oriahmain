import React from "react";
import { scroller } from "react-scroll";

export default function PortfolioStilletoDetailsShowcaseArea() {
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
              "url(/assets/img/inner-project/showcase/stiletto_inner.png)",
          }}
        >
          <div className="tp-showcase-details-scroll smooth">
            <a
              onClick={scrollTo}
              className="pointer"
              style={{ color: "#ffe169" }}
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
                    style={{ color: "#ffe169" }}
                  >
                    [ UI, Design Web, E-commerce, Mode ]
                  </span>
                  <h4
                    className="port-showcase-slider-title tp-char-animation"
                    style={{ color: "#ffe169" }}
                  >
                    Stiletto <br /> Clothing
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
                  Stilleto Clothing nous a confié la création d&apos;une boutique en
                  ligne moderne et élégante pour leur marque de mode. Notre
                  mission était de développer une plateforme e-commerce qui met
                  en valeur leurs collections tout en offrant une expérience
                  d&apos;achat fluide et agréable pour leurs clients.
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
                          <span>Stilleto Clothing</span>
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
                          <span>Design Web / E-commerce</span>
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
                          <span>États-Unis</span>
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
                          <span>Mars {"2024"}</span>
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
                  Le défi principal était de créer une expérience e-commerce qui
                  reflète l&apos;identité haut de gamme de Stilleto Clothing tout en
                  assurant une navigation intuitive et des fonctionnalités de
                  vente performantes. Nous devions concevoir une interface qui
                  met en valeur les collections de mode de manière élégante,
                  tout en intégrant des fonctionnalités e-commerce robustes pour
                  une expérience d&apos;achat optimale. Notre solution allie design
                  sophistiqué et performances techniques pour créer une boutique
                  en ligne qui correspond parfaitement aux ambitions de la
                  marque.
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
