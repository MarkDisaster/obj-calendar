import { getDateFromString } from '@/helpers/getDateFromString';

export const getIsToday = (date: string): boolean => {
   const newDate = getDateFromString(date);
   const today = new Date();
   return (
      today.getDate() === newDate.getDate() &&
      today.getMonth() === newDate.getMonth() &&
      today.getFullYear() === newDate.getFullYear()
   );
};
