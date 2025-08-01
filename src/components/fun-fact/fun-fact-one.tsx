import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";

const counter_data = [
  {
    id: 1,
    title: "PROJETS RÉALISÉS",
    count: 60,
    text: "+",
  },
  {
    id: 2,
    title: "ANNÉES D'EXPÉRIENCE",
    count: 3,
    text: "+",
  },
  {
    id: 3,
    title: "MEMBRES D'ÉQUIPE",
    count: 2,
    text: "",
  },
  {
    id: 4,
    title: "AGENCE EN CROISSANCE",
    count: 150,
    text: "%",
  },
];
export default function FunFactOne() {
  return (
    <div className="ab-funfact-area pb-40">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
                Statistiques de l&apos;agence
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                Chiffres qui comptent
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row gx-75">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
