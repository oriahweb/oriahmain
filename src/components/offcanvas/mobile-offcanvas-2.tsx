import React from "react";
import Image from "next/image";
import logo_1 from "@/assets/img/logo/logo.png";
import logo_2 from "@/assets/img/logo/logo-white.png";
import { CloseThree, CloseTwo } from "../svg";
import Link from "next/link";
import MobileMenusTwo from "./mobile-menus-2";

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvasTwo({openOffcanvas,setOpenOffcanvas}:IProps) {
  return (
    <div className={`tp-offcanvas-2-area p-relative ${openOffcanvas ? "opened" : ""}`}>
      <div className="tp-offcanvas-2-bg is-left left-box"></div>
      <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tp-offcanvas-2-wrapper">
        <div className="tp-offcanvas-2-left left-box">
          <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="tpoffcanvas__logo">
              <Link className="logo-1" href="/">
                <Image src={logo_1} alt="logo" />
              </Link>
              <Link className="logo-2" href="/">
                <Image src={logo_2} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-2-close d-md-none text-end">
              <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn tp-offcanvas-2-close-btn">
                <span className="text">
                  <span>Fermer</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <CloseThree />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tp-main-menu-mobile menu-hover-active counter-row">
            <MobileMenusTwo/>
          </div>
        </div>
        <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
          <div className="tp-offcanvas-2-close text-end">
            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
              <span className="text">
                <span>Fermer</span>
              </span>

              <span className="d-inline-block">
                <span>
                  <CloseTwo />
                </span>
              </span>
            </button>
          </div>
          <div className="tp-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
            <div className="tpoffcanvas__right-info">
              <div className="tpoffcanvas__tel">
                <a href="tel:+33613476711">+33 6 13 47 67 11</a>
              </div>
              <div className="tpoffcanvas__mail">
                <a href="mailto:contact@oriah-consulting.com">
                  contact@oriah-consulting.com
                </a>
              </div>
              <div className="tpoffcanvas__text">
                <p>Contactez-nous pour commencer!</p>
              </div>
            </div>
            <div className="tpoffcanvas__social-link">
              <ul>
                <li><a href="https://www.instagram.com/oriahconsulting">Instagram</a></li>
                <li><a href="https://www.facebook.com/oriahconsulting">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
