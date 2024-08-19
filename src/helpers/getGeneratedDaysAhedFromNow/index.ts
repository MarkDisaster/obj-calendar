import { getDayShortName } from '@/helpers/getDayShortName';
import { GeneratedDays } from '@/helpers/getGeneratedDaysAhedFromNow/interfaces';
import { getIsToday } from '@/helpers/getIsToday';
import { getIsTomorrow } from '@/helpers/getIsTommorow';

export const generateDaysAheadFromNow = (
   daysAhead: number,
): GeneratedDays[] => {
   const now = new Date();
   const days = [];
   for (let i = 0; i < daysAhead; i++) {
      const dayDate = new Date(now);
      dayDate.setDate(dayDate.getDate() + i);

      const day = dayDate.getDate();
      const month = dayDate.getMonth() + 1;
      const year = dayDate.getFullYear();
      const formattedDate = `${day}.${month}.${year}`;

      const dateWithYear = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

      let formattedDateText = `${getDayShortName(formattedDate)} ${day}.${month}.`;

      if (getIsToday(formattedDate)) {
         formattedDateText = `Dnes ${day}.${month}.`;
      } else if (getIsTomorrow(formattedDate)) {
         formattedDateText = `Zítra ${day}.${month}.`;
      }

      days.push({
         date: dateWithYear,
         formattedDate: formattedDateText,
      });
   }

   return days;
};
