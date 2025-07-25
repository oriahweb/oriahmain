'use client';
import {gsap} from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
import { useGSAP } from "@gsap/react";
import Head from 'next/head';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import AboutOne from "@/components/about/about-one";
import VideoTwo from "@/components/video/video-two";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import LineText from "@/components/line-text/line-text";
import InstagramArea from "@/components/instagram/instagram-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { bounceAnimation, heroBgAnimation, heroTitleAnim } from "@/utils/title-animation";
import { videoAnimTwo } from "@/utils/video-anim";
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";

const HomeTwoMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // bounce animation
      bounceAnimation();
      // video anim
      videoAnimTwo();
      // panel animation
      panelOneAnimation();
      // award animation
      awardAnimOne();
      // instagram animation
      instagramAnim();
      hoverBtn();
    }, 100)
    return () => clearTimeout(timer);
  });
  
  
  return (
    <Wrapper>
      <Head>
        <title>Oria Consulting - Agence de conseil en stratégie digitale.</title>
        <meta name="description" content="Oria Consulting est une agence de conseil en stratégie digitale qui aide les entreprises à se développer en ligne." />
        <link rel="icon" href="/faviconOriah.ico" />
        <link rel="shortcut icon" href="/faviconOriah.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Oria Consulting, Agence de conseil en stratégie digitale, Développement web, Marketing digital, SEO, SMO, SEM, PPC, Référencement, Conseil en stratégie digitale, Conseil en marketing digital, Conseil en référencement, Conseil en SMO, Conseil en SEM, Conseil en PPC" />
        <meta name="author" content="Oria Consulting" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerTwo />
            {/* hero area end */}

            {/* about area start */}
            <AboutOne/>
            {/* about area end */}

            {/* video area start */}
            <VideoTwo />
            {/* video area end */}

            {/* service area start */}
            <ServiceTwo />
            {/* service area end */}

            {/* project area */}
            {/* <ProjectTwo/> */}
            {/* project area */}

            {/* line text area */}
            <LineText/>
            {/* line text area */}

            {/* instagram area */}
            <InstagramArea/>
            {/* instagram area */}
          </main>

          {/* footer area */}
          <FooterTwo/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTwoMain;
