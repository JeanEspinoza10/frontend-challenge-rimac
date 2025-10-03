import { CardSelector } from "@/components/cards/SelectCard";
import { Load } from "@/components/loaders/Load";
import { useData } from "@/components/provider/DataProvider";
import { Stepper } from "@/components/stepper/Stepper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/pages/plans/plans.scss";
import { fetchPlans, type PlansResponse } from "@/services/servicePlans";
import { PlanCard } from "@/components/cards/PlanCard";
import { User } from "lucide-react";
import { calculateAge } from "@/utils/transfor";
import { BackButton } from "@/components/navigation/Navigation";

export const Plans = () => {
  const { user, setUser } = useData();
  const [isLoad, setIsLoad] = useState(true);
  const [plans, setPlans] = useState<PlansResponse | null>(null);
  const [originalPlans, setOriginalPlans] = useState<PlansResponse | null>(
    null
  );

  const [selectedCard, setSelectedCard] = useState<string>("");
  const navigate = useNavigate();

  const loadPlans = async () => {
    try {
      setIsLoad(true);
      const response = await fetchPlans();
      const filteredPlans = response?.list?.filter(
        (plan) => plan.age >= calculateAge(user?.birthDay ?? "")
      );

      const plansData = { list: filteredPlans ?? [] };
      setPlans(plansData);
      setOriginalPlans(plansData);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    if (!user?.birthDay || !user?.name || !user?.lastName) {
      navigate("/home");
      return;
    }
    loadPlans();
    setIsLoad(!isLoad);
  }, []);

  useEffect(() => {
    if (!originalPlans) return;

    if (selectedCard === "mail") {
      const updatedPlans: PlansResponse = {
        list: originalPlans.list.map((plan) => ({
          ...plan,
          price: plan.price * 0.95,
        })),
      };
      setPlans(updatedPlans);
    } else {
      setPlans(originalPlans);
    }
  }, [selectedCard, originalPlans]);

  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        <main className="plans">
          <Stepper activeLabel="Planes y coberturas" />
          <BackButton to="/home"/>
          
          <section className="plans__about">
            <div className="plans__about_header">
              <h2>{user?.name} ¿Para quien deseas cotizar?</h2>
              <p>Seleccione la opción que se ajuste más a tus necesidades</p>
            </div>
            <CardSelector
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <div className="plans__about_filter">
              {plans &&
                selectedCard &&
                (plans.list || []).map((plan) => (
                  <PlanCard
                    key={`${plan.name}-id`}
                    title={plan.name}
                    price={`S/${plan.price}`}
                    features={plan.description || []}
                    icon={<User />}
                    onSelect={() => {
                      setUser((prevUser) => ({
                        ...prevUser, 
                        planSelect: plan.name, 
                        planPrice: plan.price
                      }));
                      navigate("/resumen");
                    }}
                  />
                ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};
