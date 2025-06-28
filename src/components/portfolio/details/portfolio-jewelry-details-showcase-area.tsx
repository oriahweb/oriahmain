import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

export default function PortfolioJewelryDetailsShowcaseArea() {
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
         <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/jewelry_inner.png)"}}>
          <div className="tp-showcase-details-scroll smooth">
              <a onClick={scrollTo} className="pointer" style={{color: "#f5e6e0"}}>
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
                      <span className="port-showcase-slider-subtitle tp_title_anim" style={{color: "#f5e6e0"}}>
                        [ UI, Design Web, E-commerce, Bijouterie de Luxe ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation" style={{color: "#f5e6e0"}}>Jewelry <br/> Shop</h4>
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
                      <p className="tp_title_anim">Maison Joaillerie, une prestigieuse maison de joaillerie parisienne, nous a confié la création de leur boutique en ligne. Notre mission était de traduire l'élégance et le raffinement de leurs créations artisanales dans une expérience digitale immersive, tout en préservant l'essence du luxe à la française.</p>
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
                                    <span>Maison Joaillerie</span>
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
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">Le défi</span>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right tp_title_anim">
                      <p>Notre défi principal était de créer une expérience en ligne qui capture l'essence même du savoir-faire artisanal et du luxe caractéristique de Maison Joaillerie. Nous avons développé une interface sophistiquée permettant aux clients de découvrir chaque pièce unique dans ses moindres détails, avec des visualisations 360° et un système de zoom haute définition. L'accent a été mis sur la création d'une expérience d'achat personnalisée et exclusive, reflétant l'excellence de la marque.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}
    </>
  )
}
