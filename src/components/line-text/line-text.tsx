"use client";
import React from "react";

export default function LineText() {
  return (
    <div className="tp-line-text-area tp-line-text-space black-bg z-index-4 fix flex items-center justify-center py-10 text-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="tp-line-text-box mb-0">
              <h4 className="tp-line-text text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                Site Web <span className="text-yellow-400">- Référencement -</span> Design{" "}
                <span className="text-yellow-400">- Marketing -</span> Stratégie{" "}
                <span className="text-yellow-400">- Branding -</span> E-commerce
              </h4>
              <h4 className="tp-line-text tp-line-text-2 text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
                - Graphisme <span className="text-yellow-400">- Publicité -</span> Médias Sociaux{" "}
                <span className="text-yellow-400">- Contenu -</span> Analytics{" "}
                <span className="text-yellow-400">- Solutions -</span> Digital
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
