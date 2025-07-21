import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import ab_1 from "@/assets/img/inner-about/about/about1.jpg";
// import ab_2 from "@/assets/img/inner-about/about/about3.png";
import ab_3 from "@/assets/img/inner-about/about/about_4.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                {/* <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                /> */}
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <p className="tp_fade_bottom " style={{fontSize: "32px" , textAlign: "justify"}}>
                Oriah Consulting est une agence de création digitale spécialisée dans la
                fourniture de solutions numériques complètes et de haute qualité. Notre expertise
                s&apos;étend du développement web professionnel à la conception graphique créative,
                en passant par l&apos;optimisation SEO stratégique et la gestion de campagnes
                publicitaires performantes. Notre équipe talentueuse de designers, développeurs
                et experts marketing s&apos;engage à transformer votre vision en réalité digitale
                qui se démarque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
