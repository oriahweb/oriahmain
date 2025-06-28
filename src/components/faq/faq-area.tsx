import React from "react";
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data: IFaq[] = [
  {
    id: 1,
    question: "Quels services propose Oriah Consulting ?",
    answer:
      "Oriah Consulting offre des services de création de sites web optimisés, de campagnes publicitaires Facebook Ads, et de développement de chatbots d'intelligence artificielle. Nous aidons les entreprises à améliorer leur présence en ligne, à attirer plus de clients et à augmenter leur chiffre d'affaires.",
  },
  {
    id: 2,
    question: "Pourquoi faire confiance à Oriah Consulting ?",
    answer:
      "Chez Oriah Consulting, notre priorité est votre succès. Nous nous engageons à offrir des services de haute qualité en utilisant des stratégies éprouvées et des technologies de pointe. Nos experts sont dédiés à comprendre vos besoins et à fournir des solutions sur mesure qui génèrent des résultats tangibles.",
  },
  {
    id: 3,
    question: "Quels résultats puis-je attendre de vos services ?",
    answer:
      "Nos clients constatent généralement une augmentation significative de leur visibilité en ligne, une amélioration du taux de conversion et une croissance notable de leur chiffre d'affaires. Chaque projet est unique, et nous travaillons avec vous pour fixer des objectifs clairs et mesurer les résultats.",
  },
  {
    id: 4,
    question: "Comment garantissez-vous la qualité de vos services ?",
    answer:
      "Nous adoptons une approche rigoureuse et méthodique pour chaque projet. Nos processus incluent des phases de planification, de développement, de test et d'optimisation. De plus, nous vous tenons informé à chaque étape, assurant ainsi une transparence totale et des ajustements en temps réel pour garantir la satisfaction.",
  },
  {
    id: 5,
    question: "Combien de temps faut-il pour livrer un projet ?",
    answer:
      "La durée de livraison d'un projet dépend de sa complexité et de ses spécificités. Cependant, nous nous engageons à fournir des délais clairs dès le début et à respecter ces échéances. Pour des projets standards, la livraison prend environ une semaine. Nous vous tiendrons informé de l'avancement à chaque étape pour garantir une transparence totale.",
  },
  {
    id: 6,
    question: "Quel est votre support après la livraison du projet ?",
    answer:
      "Nous assurons un support après la livraison pour garantir le bon fonctionnement de votre solution. Cela inclut des correctifs, des mises à jour mineures et une assistance technique. Nous restons disponibles pour vous aider même après la mise en ligne.",
  },
  {
    id: 7,
    question: "Comment démarrer avec Oriah Consulting ?",
    answer:
      "Pour commencer, contactez-nous via notre formulaire en ligne, par téléphone ou par email. Nous organiserons une consultation gratuite pour discuter de vos objectifs et de vos besoins. Ensuite, nous élaborerons un plan stratégique sur mesure pour vous aider à atteindre vos objectifs marketing.",
  },
  {
    id: 8,
    question: "Pouvez-vous aider à améliorer notre site web existant ?",
    answer:
      "Absolument ! Nous proposons des services d'audit de site web pour analyser les performances, l’expérience utilisateur et les aspects techniques de votre site actuel. Sur cette base, nous fournissons des recommandations et mettons en œuvre les améliorations nécessaires.",
  },
];


export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
