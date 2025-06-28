import React from 'react';
import { scroller } from 'react-scroll';

export default function PortfolioRefitDetailsShowcaseArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
     {/* details area */}
      <div className="tp-showcase-details-area">
         <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/refit_inner.png)"}}>
          <div className="tp-showcase-details-scroll smooth">
              <a onClick={scrollTo} className="pointer" style={{color: "#bc8a5f"}}>
                <i className="fa-sharp fa-light fa-angle-down" ></i>
                Défiler ou glisser pour naviguer
              </a>
          </div>
          <div className="port-showcase-slider-social tp-hover-btn-wrapper">
              <a className="tp-hover-btn-item tp-hover-btn" href="#">Fb</a>
              <a className="tp-hover-btn-item tp-hover-btn" href="#">In</a>
              <a className="tp-hover-btn-item tp-hover-btn" href="#">Be</a>
          </div>
          <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="tp-showcase-details-content text-center">
                      <span className="port-showcase-slider-subtitle tp_title_anim" style={{color: "#bc8a5f"}}>
                        [ UI, Design Web, Design d'Intérieur, Immobilier ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation" style={{color: "#bc8a5f"}}>Refit <br/> Design d'Intérieur</h4>
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
                      <p className="tp_title_anim">Refit Design d'Intérieur nous a contacté pour créer une présence en ligne sophistiquée qui met en valeur leur expertise en design d'intérieur haut de gamme. Notre mission était de développer une plateforme élégante qui reflète leur vision créative et leur approche innovante du design d'espace, tout en offrant une expérience utilisateur intuitive pour leur clientèle exigeante.</p>
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
                                    <span>Refit Design d'Intérieur</span>
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
                                    <span>Design Web / Design d'Intérieur</span>
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
                                    <span>Mumbai, Inde</span>
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
                                    <span>Avril {"2025"}</span>
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
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">Le défi</span>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right tp_title_anim">
                      <p>Le principal défi était de créer une plateforme numérique qui capture l'essence du design d'intérieur contemporain de Refit tout en mettant en valeur leur portfolio diversifié. Nous devions concevoir une interface qui présente leurs projets de manière immersive et qui communique efficacement leur expertise en matière de transformation d'espaces. Notre solution allie une esthétique minimaliste à des fonctionnalités avancées, offrant une vitrine numérique qui reflète parfaitement leur approche innovante du design d'intérieur.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}
    </>
  )
}
