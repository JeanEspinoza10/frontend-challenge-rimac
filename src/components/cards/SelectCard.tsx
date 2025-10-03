import React from "react";
import { Check, User, Mail } from "lucide-react";
import "@/components/cards/selectCard.scss";

interface SelectableCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  icon,
  title,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`selectable-card ${isSelected ? "selectable-card--selected" : ""}`}
    >
      {/* Checkbox indicator */}
      <div
        className={`selectable-card__indicator ${
          isSelected ? "selectable-card__indicator--selected" : ""
        }`}
      >
        {isSelected && <Check className="selectable-card__check" />}
      </div>
      <div className="selectable-card__icon">{icon}</div>
      <h3 className="selectable-card__title">{title}</h3>
      <p className="selectable-card__description">{description}</p>
    </button>
  );
};

interface CardSelectorProps {
  selectedCard: string;
  setSelectedCard: (value: string) => void;
}

export const CardSelector: React.FC<CardSelectorProps> = ({ selectedCard, setSelectedCard }) => {
  return (
    <div className="plans__about_container">
      <SelectableCard
        icon={<User size={24} />}
        title="Para mi"
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas"
        isSelected={selectedCard === "user"}
        onClick={() => setSelectedCard("user")}
      />
      <SelectableCard
        icon={<Mail size={24} />}
        title="Para alguien más"
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
        isSelected={selectedCard === "mail"}
        onClick={() => setSelectedCard("mail")}
      />
    </div>
  );
};