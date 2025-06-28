import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function ContactTwo() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social/>
        </div>
        <div className="ab-2-hero-social-text">
          <span>Suivez-nous</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title">
                Envoyer un message <br />
              </h4>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
