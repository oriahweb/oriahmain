import React from "react";
import Image from "next/image";
import { scroller } from "react-scroll";

export default function PortfolioDarioDetailsShowcaseArea() {
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
              "url(/assets/img/inner-project/showcase/dario_inner.png)",
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
                    [ Photographie, Direction Artistique, Portrait ]
                  </span>
                  <h4
                    className="port-showcase-slider-title tp-char-animation"
                    style={{ color: "#b5c9c3" }}
                  >
                    Dario <br /> Photographe
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
                  Dario, photographe talentueux basé à Paris, nous a confié la
                  création de son portfolio en ligne. Notre mission était de
                  concevoir une plateforme élégante qui met en valeur son
                  travail artistique unique, notamment ses portraits saisissants
                  et ses compositions créatives.
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
                          <span>Dario Photographe</span>
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
                          <span>Design Web / Portfolio</span>
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
                  Notre principal défi était de créer une expérience visuelle
                  immersive qui reflète l&apos;esthétique unique de Dario tout en
                  assurant une navigation fluide à travers son portfolio. Nous
                  avons développé une interface minimaliste qui met l&apos;accent sur
                  ses photographies, avec des transitions élégantes et une mise
                  en page adaptative qui s&apos;ajuste parfaitement à chaque format
                  d&apos;image.
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
