interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: Plan[];
}

const URL_BASE = 'https://rimac-front-end-challenge.netlify.app/api/plans.json';

export async function fetchPlans(): Promise<PlansResponse | null> {
  try {
    const response = await fetch(URL_BASE);
    if (!response.ok) {
      return null;
    }

    const dataPlans: PlansResponse = await response.json();
    return dataPlans;
  } catch (error) {
    return null;
  }
}