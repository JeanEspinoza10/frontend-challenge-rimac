import { SummaryCard } from "@/components/cards/SummaryCard";
import { Load } from "@/components/loaders/Load";
import { useData } from "@/components/provider/DataProvider";
import { Stepper } from "@/components/stepper/Stepper";
import { useEffect, useState } from "react";
import "@/pages/summary/summary.scss";
import { BackButton } from "@/components/navigation/Navigation";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const { user } = useData();
  const [isLoad, setIsLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.birthDay || !user?.name || !user?.lastName) {
      navigate("/home");
      return;
    }
    setIsLoad(!isLoad);
  }, []);

  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        <main className="summary">
          <Stepper activeLabel="Resumen" />
          <BackButton to="/planes" />
          <section className="summary-info">
            <SummaryCard
              userName={user.name}
              dni={user.nroDoc}
              phone={user.phone}
              planName={user.planSelect}
              planCost={String(user.planPrice)}
            />
          </section>
        </main>
      )}
    </>
  );
};
