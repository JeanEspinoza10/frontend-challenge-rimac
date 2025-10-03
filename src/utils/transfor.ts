export function calculateAge(birthDay: string): number {
  
  const [day, month, year] = birthDay.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day); 

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  
  const m = today.getMonth() - birthDate.getMonth();
  const d = today.getDate() - birthDate.getDate();
  if (m < 0 || (m === 0 && d < 0)) {
    age--;
  }

  return age;
}