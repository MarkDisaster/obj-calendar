import { getDateFromString } from '@/helpers/getDateFromString';

export const getDayShortName = (date: string): string => {
   const dayDate = getDateFromString(date);
   return dayDate.toLocaleDateString('cs', { weekday: 'short' });
};
