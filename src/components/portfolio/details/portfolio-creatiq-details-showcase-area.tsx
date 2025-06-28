import React from "react";
import Image from "next/image";
import { scroller } from "react-scroll";

export default function PortfolioCreatiqDetailsShowcaseArea() {
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
              "url(/assets/img/inner-project/showcase/creatiq_inner.png)",
          }}
        >
          <div className="tp-showcase-details-scroll smooth">
            <a
              onClick={scrollTo}
              className="pointer"
              style={{ color: "#33415c" }}
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
                    style={{ color: "#33415c" }}
                  >
                    [ UI, Design Web, Solutions Numériques ]
                  </span>
                  <h4
                    className="port-showcase-slider-title tp-char-animation"
                    style={{ color: "#33415c" }}
                  >
                    Creatiq <br /> Solutions Web
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
                  Creatiq, une agence de solutions web basée à Paris, nous a
                  confié la refonte complète de leur identité numérique. Notre
                  mission était de créer une plateforme moderne qui reflète leur
                  expertise en développement web et leur approche créative, tout
                  en mettant en valeur leur portfolio de projets innovants.
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
                          <span>Creatiq Solutions Web</span>
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
                          <span>Design Web / Solutions Numériques</span>
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
                          <span>Paris, France</span>
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
                          <span>Février {"2024"}</span>
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
                  Le défi principal était de créer une plateforme qui démontre
                  l&apos;expertise technique et créative de Creatiq tout en restant
                  intuitive et engageante. Nous avons développé une interface
                  moderne qui met en valeur leurs réalisations et leur
                  savoir-faire en matière de solutions web innovantes. L&apos;accent
                  a été mis sur une expérience utilisateur fluide qui reflète
                  leur approche professionnelle et leur capacité à livrer des
                  projets numériques de haute qualité.
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
