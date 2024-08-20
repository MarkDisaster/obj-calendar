import { getDateFromString } from '@/helpers/getDateFromString';

/**
 * Gets the abbreviated name of the day of the week for a given date string.
 *
 * This function converts the provided date string into a `Date` object and then retrieves the abbreviated
 * name of the day of the week in Czech language (short form) using `toLocaleDateString` with appropriate options.
 *
 * @param {string} date - The date string in the format 'dd.mm.yyyy' (e.g., '20.08.2024').
 * @returns {string} The abbreviated name of the day of the week in Czech (e.g., 'po' for Monday).
 *
 * @example
 * const shortDayName = getDayShortName('20.08.2024');
 * console.log(shortDayName); // Output: 'čt 22.8.'
 */

export const getDayShortName = (date: string): string => {
   const dayDate = getDateFromString(date);
   return dayDate.toLocaleDateString('cs', { weekday: 'short' });
};
