"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import PricingArea from "@/components/pricing/pricing-area";
import FaqAreaTwo from "@/components/faq/faq-area-2";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PricingMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* pricing hero */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Oriah Consulting</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Nos Plans de Tarification
                        </h4>
                      </div>
                      <div className="tm-hero-text">
                        <p className="tp_title_anim">
                          Choisissez la bonne offre et lancez votre projet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing hero */}

              {/* pricing area */}
              <PricingArea/>
              {/* pricing area */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingMain;
