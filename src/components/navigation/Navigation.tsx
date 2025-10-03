import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to: string; // URL a la que nos vamos
}

export const BackButton = forwardRef<HTMLDivElement, BackButtonProps>(
  ({ to }, ref) => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(to);
    };

    return (
      <div
        ref={ref}
        onClick={handleBack}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: "0.5rem",
          margin: "20px 0px 0px 120px",
          color: "#2563EB", 
        }}
      >
        <ArrowLeft size={20} />
        <span>Volver</span>
      </div>
    );
  }
);

BackButton.displayName = "BackButton";
