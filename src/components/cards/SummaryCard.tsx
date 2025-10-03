import { Users } from "lucide-react";
import "@/components/cards/summaryCard.scss";

interface InsuranceSummaryProps {
  userName: string;
  dni: string;
  phone: string;
  planName: string;
  planCost: string;
}

export function SummaryCard({
  userName,
  dni,
  phone,
  planName,
  planCost,
}: InsuranceSummaryProps) {
  return (
    <div className="insurance-summary">
      <h1 className="insurance-summary__title">Resumen del seguro</h1>

      <div className="insurance-summary__card">
        <div className="insurance-summary__header">
          <p className="insurance-summary__label">PRECIOS CALCULADOS PARA:</p>
          <div className="insurance-summary__user">
            <Users className="insurance-summary__icon" />
            <h2 className="insurance-summary__name">{userName}</h2>
          </div>
        </div>

        <hr className="insurance-summary__divider" />

        <div className="insurance-summary__content">
          <div className="insurance-summary__section">
            <h3 className="insurance-summary__section-title">Responsable de pago</h3>
            <p className="insurance-summary__text">DNI: {dni}</p>
            <p className="insurance-summary__text">Celular: {phone}</p>
          </div>

          <div className="insurance-summary__section">
            <h3 className="insurance-summary__section-title">Plan elegido</h3>
            <p className="insurance-summary__text">{planName}</p>
            <p className="insurance-summary__text">Costo del Plan: {planCost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}