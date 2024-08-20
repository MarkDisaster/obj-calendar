import { getDayShortName } from '@/helpers/getDayShortName';
import { GeneratedDays } from '@/helpers/getGeneratedDaysAhedFromNow/interfaces';
import { getIsToday } from '@/helpers/getIsToday';
import { getIsTomorrow } from '@/helpers/getIsTommorow';

/**
 * Generates a list of `GeneratedDays` objects representing the next `daysAhead` days from the current date.
 *
 * For each day in the specified range, this function creates a `GeneratedDays` object that includes:
 * - A date in ISO 8601 format.
 * - A formatted date string, which shows "Dnes" (Today) for the current day, "Zítra" (Tomorrow) for the next day, or the abbreviated day of the week and date for other days.
 *
 * @param {number} daysAhead - The number of days ahead from the current date to generate. Must be a non-negative integer.
 * @returns {GeneratedDays[]} An array of `GeneratedDays` objects, each containing:
 *   - `date`: The date in ISO 8601 format (e.g., '2024-01-01').
 *   - `formattedDate`: A human-readable string representing the date (e.g., 'Dnes 1.1.' for today).
 *
 * @example
 * const daysAhead = 5;
 * const result = generateDaysAheadFromNow(daysAhead);
 * console.log(result);
 * // Output might be an array of 5 `GeneratedDays` objects, such as:
 * // [
 * //   { date: '2024-08-20', formattedDate: 'Dnes 20.8.' },
 * //   { date: '2024-08-21', formattedDate: 'Zítra 21.8.' },
 * //   { date: '2024-08-22', formattedDate: 'Čt 22.8.' },
 * //   { date: '2024-08-23', formattedDate: 'Pá 23.8.' },
 * //   { date: '2024-08-24', formattedDate: 'So 24.8.' }
 * // ]
 */

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
