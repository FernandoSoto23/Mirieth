import { Customer } from "@/types/customer";

export const AgeCalculate = (birthday: Customer["birthdate"]) => {
    // Obtener solo la fecha sin la hora (si existe)
    const date = birthday.split(" ")[0];
    const [day, month, year] = date.split("/");
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age.toString();
  }