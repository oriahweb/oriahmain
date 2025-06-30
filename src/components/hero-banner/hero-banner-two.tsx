"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";

// Import your images
import hero1 from "@/assets/img/home-02/hero/hero1.png";
import hero2 from "@/assets/img/home-02/hero/hero2.png";
import hero3 from "@/assets/img/home-02/hero/hero3.png";
import hero4 from "@/assets/img/home-02/hero/hero4.png";
import hero5 from "@/assets/img/home-02/hero/hero5.png";

const images = [hero1, hero2, hero3, hero4, hero5];

const HeroBannerTwo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds per image (you can adjust)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                {/* Background with transition */}
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <div className="relative w-full h-full">
                    {images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`hero-${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "opacity 1s ease-in-out",
                          opacity: index === currentImageIndex ? 1 : 0,
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h2 className="tp-hero-2-title text-2 z-index-5">
                      Créatives
                    </h2>
                    <h2 className="tp-hero-2-title text-2">Numériques</h2>
                    <h2 className="tp-hero-2-title text-2">Solutions</h2>
                  </div>
                  <div className="tp-hero-2-content">
                    <p>
                      Découvrez comment Oriah Consulting peut transformer votre
                      présence en ligne et maximiser vos résultats pour atteindre 
                      une croissance exceptionnelle.
                    </p>
                    <Link
                      className="tp-btn-white"
                      href="/contact"
                    >
                      Contactez-nous
                      <span>
                        <Leaf />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
