import { SummaryCard } from "@/components/cards/SummaryCard";
import { Load } from "@/components/loaders/Load";
import { useData } from "@/components/provider/DataProvider";
import { Stepper } from "@/components/stepper/Stepper";
import { useState } from "react";
import "@/pages/summary/summary.scss"
import { BackButton } from "@/components/navigation/Navigation";

export const Summary = () => {
  const { user } = useData();
  const [isLoad, setIsLoad] = useState(false);
  return (
   <>
      {isLoad ? (
        <Load />
      ) : (
        <main className="summary">
          <Stepper activeLabel="Resumen"/>
          <BackButton to="/planes"/>
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
  )
}
