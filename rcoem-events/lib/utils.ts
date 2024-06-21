import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateToGood = (date:string) =>{
  const d = new Date(date)
  const year = d.getFullYear().toLocaleString().replace("," , "")
  const month = d.getMonth().toLocaleString()
  let string;
  switch(Number(month)){
      case 1: string = "January";
          break;
      case 2: string = "February";
          break;
      case 3: string = "March";
          break;
      case 4: string = "April";
          break;
      case 5: string = "May";
          break;
      case 6: string = "June"; 
          break;
      case 7: string = "July";
          break;
      case 8: string = "August";
          break;
      case 9: string = "September";
          break;
      case 10: string = "October";
          break;
      case 11: string = "November";
          break;
      case 12: string = "December";
          break;
      }
  const da = d.getDate().toLocaleString()
  return da+" "+string+" "+year
}