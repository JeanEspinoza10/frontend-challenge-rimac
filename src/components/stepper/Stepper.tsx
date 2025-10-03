import React from "react";
import "@/components/stepper/stepper.scss";

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  activeLabel: string; 
}

export const Stepper: React.FC<StepperProps> = ({ activeLabel }) => {
  const steps: Step[] = [
    { number: 1, label: "Planes y coberturas" },
    { number: 2, label: "Resumen" },
  ];

  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isActive = step.label === activeLabel;

        return (
          <div key={step.number} className="stepper__step">
            <div className="stepper__item">
              <div className={`stepper__circle ${isActive ? "active" : ""}`}>
                {step.number}
              </div>
              <span className={`stepper__label ${isActive ? "active" : ""}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && <div className="stepper__divider" />}
          </div>
        );
      })}
    </div>
  );
};