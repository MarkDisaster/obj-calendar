import { getDateFromString } from '@/helpers/getDateFromString';

export const getIsTomorrow = (date: string): boolean => {
   const newDate = getDateFromString(date);
   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   return (
      newDate.getDate() === tomorrow.getDate() &&
      newDate.getMonth() === tomorrow.getMonth() &&
      newDate.getFullYear() === tomorrow.getFullYear()
   );
};
