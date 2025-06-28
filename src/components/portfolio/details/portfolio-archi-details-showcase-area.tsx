import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

export default function PortfolioArchiDetailsShowcaseArea() {
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
         <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/archi_inner.png)"}}>
          <div className="tp-showcase-details-scroll smooth">
              <a onClick={scrollTo} className="pointer" style={{color: "#c9ada7"}}>
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
                      <span className="port-showcase-slider-subtitle tp_title_anim" style={{color: "#c9ada7"}}>
                        [ UI, Design Web, Real Estate ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation" style={{color: "#c9ada7"}}>Archi <br/> Real Estate</h4>
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
                      <p className="tp_title_anim">Archi Real Estate nous a mandaté pour développer une plateforme immobilière moderne et sophistiquée. Notre objectif était de créer un site web qui présente leur portfolio immobilier haut de gamme de manière élégante tout en offrant une expérience utilisateur intuitive pour les acheteurs potentiels.</p>
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
                                    <span>Archi Real Estate</span>
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
                                    <span>Design Web / Immobilier</span>
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
                                    <span>Montréal, Canada</span>
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
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">Le défi</span>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right tp_title_anim">
                      <p>Le principal défi était de créer une plateforme qui met en valeur les propriétés luxueuses d'Archi Real Estate tout en maintenant une interface utilisateur simple et efficace. Nous avons développé un système de filtrage avancé et une présentation visuelle immersive qui permet aux clients de découvrir chaque propriété en détail. L'accent a été mis sur la création d'une expérience premium qui reflète la qualité des biens immobiliers proposés.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}
    </>
  )
}
