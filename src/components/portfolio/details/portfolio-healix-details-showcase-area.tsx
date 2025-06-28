import React from 'react';
import { scroller } from 'react-scroll';

export default function PortfolioHealixDetailsShowcaseArea() {
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
         <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/healix_inner.png)"}}>
          <div className="tp-showcase-details-scroll smooth">
              <a onClick={scrollTo} className="pointer" style={{color: "#0077b6"}}>
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
                      <span className="port-showcase-slider-subtitle tp_title_anim" style={{color: "#0077b6"}}>
                        [ UI, Design Web, Santé, Solutions Médicales ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation" style={{color: "#0077b6"}}>Healix <br/> Healthcare</h4>
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
                      <p className="tp_title_anim">Healix Healthcare nous a confié la mission de développer une plateforme médicale innovante qui facilite l'accès aux soins de santé. Notre objectif était de créer une interface intuitive permettant aux patients de gérer leurs rendez-vous médicaux et d'accéder à leurs dossiers de santé en toute sécurité.</p>
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
                                    <span>Healix Healthcare</span>
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
                                    <span>Design Web / Solutions Médicales</span>
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
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">Le défi</span>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right tp_title_anim">
                      <p>Le principal défi était de créer une plateforme médicale qui combine accessibilité et sécurité des données. Nous devions développer une interface utilisateur intuitive tout en respectant les normes strictes de confidentialité des données médicales. Notre solution intègre des fonctionnalités avancées de gestion des rendez-vous et des dossiers médicaux, tout en garantissant une expérience utilisateur fluide et sécurisée pour les patients et les professionnels de santé.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}
    </>
  )
}
