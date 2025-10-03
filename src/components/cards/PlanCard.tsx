import React from "react";
import "@/components/cards/plancard.scss";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  isRecommended?: boolean;
  onSelect: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  icon,
  isRecommended = false,
  onSelect,
}) => {
  return (
    <div
      className={`plan-card ${isRecommended ? "plan-card--recommended" : ""}`}
    >
      {isRecommended && (
        <span className="plan-card__badge">Plan recomendado</span>
      )}

      <div className="plan-card__header">
        <div className="plan-card__info">
          <h3 className="plan-card__title">{title}</h3>
          <p className="plan-card__subtitle">COSTO DEL PLAN</p>
          <p className="plan-card__price">${price} al mes</p>
        </div>
        <div className="plan-card__icon">{icon}</div>
      </div>
      <div className="plan-card__line"></div>
      <div className="plan-card__actions">
        <ul className="plan-card__features">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button className="plan-card__button" onClick={onSelect}>
          Seleccionar Plan
        </button>
      </div>
    </div>
  );
};
