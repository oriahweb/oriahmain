"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import {addEvents, slideNextTransitionStart,slidePrevTransitionStart, verTextFragment} from "@/utils/webgl-anim";
import { WebGL } from "@/plugins";
// images
import showcase_1 from "@/assets/img/inner-project/showcase/astrid_inner.png";
import showcase_2 from "@/assets/img/inner-project/showcase/archi_inner.png";
import showcase_3 from "@/assets/img/inner-project/showcase/garoa_inner.png";
import showcase_4 from "@/assets/img/inner-project/showcase/dario_inner.png";
import showcase_5 from "@/assets/img/inner-project/showcase/king_inner.png";
import showcase_6 from "@/assets/img/inner-project/showcase/jewelry_inner.png";
import showcase_7 from "@/assets/img/inner-project/showcase/stiletto_inner.png";
import showcase_8 from "@/assets/img/inner-project/showcase/healix_inner.png";
import showcase_9 from "@/assets/img/inner-project/showcase/refit_inner.png";
import showcase_10 from "@/assets/img/inner-project/showcase/creatiq_inner.png";
import showcase_11 from "@/assets/img/inner-project/showcase/builty_inner.png";

// slider data
const slider_data = [
  {
    id: 1,
    subtitle: "[ UI, Design Web, Image de marque, Photographie ]",
    title: "Astrid <br/> Photographie",
    color: "#99582a",
    link: "/portfolio-astrid-details"
  },
  {
    id: 2,
    subtitle: "[ UI, Design Web, Real Estate ]",
    title: "Archi <br/> Real Estate",
    color: "#c9ada7",
    link: "/portfolio-archi-details"
  },
  {
    id: 3,
    subtitle: "[ UI, Design Web, Skincare ]",
    title: "Garoa <br/> Skincare",
    color: "#ffe5d9",
    link: "/portfolio-garoa-details"
  },
  {
    id: 4,
    subtitle: "[UI, Design Web, Image de marque, Photographie  ]",
    title: "Dario <br/> Photographie",
    color: "#b5c9c3",
    link: "/portfolio-dario-details"
  },
  {
    id: 5,
    subtitle: "[ UI, Design Web, Tree Service ]",
    title: "King <br/> Tree Service",
    color: "#b7e4c7",
    link: "/portfolio-king-details"
  },
  {
    id: 6,
    subtitle: "[ UI, Web Design, Jewelry ]",
    title: "Jewelry <br/> Shop",
    color: "#f5e6e0",
    link: "/portfolio-jewelry-details"
  },
  {
    id: 7,
    subtitle: "[ UI, Design Web, Clothing ]",
    title: "Stiletto <br/> Clothing",
    color: "#ffe169",
    link: "/portfolio-stilleto-details"
  },
  {
    id: 8,  
    subtitle: "[ UI, Design Web, Health ]",
    title: "Healix <br/> Health",
    color: "#0077b6",
    link: "/portfolio-healix-details"
  },
  {
    id: 9,
    subtitle: "[ UI, Design Web, Real Estate ]",
    title: "Refit <br/> Real Estate",
    color: "#bc8a5f",
    link: "/portfolio-refit-details"
  },
  {
    id: 10,
    subtitle: "[ UI, Web Solution ]",
    title: "Creatiq <br/> Web Solution",
    color: "#33415c",
    link: "/portfolio-creatiq-details"
  },
  
  
];

// slider setting
const slider_setting: SwiperOptions = {
  direction: "horizontal",
  loop: false,
  slidesPerView:1,
  touchStartPreventDefault: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".tp-slider-dot",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div className="' + className + '"></div>';
    },
  },
};

// slider images
const slider_images = [showcase_1, showcase_2, showcase_3, showcase_4, showcase_5, 
  showcase_6, showcase_7, showcase_8, showcase_9, showcase_10, showcase_11];
export default function PortfolioSliderHomeEleven() {
  const webGLContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (webGLContainerRef.current) {

      const webGL = new WebGL( {
        vertex: verTextFragment().vertex,
			  fragment: verTextFragment().fragment,
      });

      // Instantiate WebGL
      addEvents(webGL)
      // Append renderer element to container
      webGLContainerRef.current.appendChild(webGL.renderer.domElement);

      // Clean up function
      return () => {
        // Stop WebGL rendering
        webGL.stop();
      };
    }
  }, []);
  return (
    <div id="port-showcase-slider-main">
      <div className="port-showcase-slider-spaces p-relative">
        <div
          className="port-showcase-slider-wrap tp-slider-parallax fix"
          id="showcase-slider-holder"
          data-pattern-img="/assets/img/webgl/1.jpg"
        >
          <div
            className="swiper-container parallax-slider-active p-relative"
            id="showcase-slider"
          >
            <Swiper
              direction="horizontal"
              slidesPerView="auto"
              touchStartPreventDefault={false}
              speed={1000}
              effect="fade"
              loop={true}                 
              mousewheel={true}
              simulateTouch={true}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              pagination={{
                el: '.tp-slider-dot',
                clickable: true,
              }}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              onSlidePrevTransitionStart={slidePrevTransitionStart}
              onSlideNextTransitionStart={slideNextTransitionStart}
              id="trigger-slides"
            >
              {slider_data.map((item,i) => (
                <SwiperSlide key={item.id}>
                  <div className={`slide-wrap ${i === 0 ? 'active' : ''}`} data-slide={i}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="port-showcase-slider-item">
                          <div className="port-showcase-slider-content">
                            <span className="port-showcase-slider-subtitle" style={{color: item.color}}>
                              {item.subtitle}
                            </span>
                            <h4 className="port-showcase-slider-title" style={{color: item.color}}>
                              <Link
                                href={item.link}
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="tp-showcase-arrow-box">
              <button className="tp-showcase__button-next swiper-next">
                <i className="fa-light fa-angle-up"></i>
              </button>
              <button className="tp-showcase__button-prev swiper-prev">
                <i className="fa-light fa-angle-down"></i>
              </button>
            </div>
            <div className="tp-slider-dot d-none d-md-block"></div>
            <div className="port-showcase-slider-social tp-hover-btn-wrapper d-none d-md-block">
              <a className="tp-hover-btn-item" href="#">Fb</a>
              <a className="tp-hover-btn-item" href="#">In</a>
              <a className="tp-hover-btn-item" href="#">Be</a>
            </div>
          </div>
        </div>
      </div>

      {/*  canvas slider */}
      <div id="canvas-slider" className="canvas-slider" ref={webGLContainerRef}>
        {slider_images.map((imgSrc, index) => (
        <div key={index} className="slider-img" data-slide={index}>
          <Image
            className="slide-img"
            src={imgSrc}
            alt="showcase-img"
            style={{ height: "auto" }}
          />
        </div>
        ))}
      </div>
      {/* canvas slider  */}
    </div>
  );
}
