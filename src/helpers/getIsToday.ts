import { getDateFromString } from '@/helpers/getDateFromString';

/**
 * Checks if the provided date string corresponds to today's date.
 *
 * The function converts the provided date string into a `Date` object and compares it with the current date.
 * It returns `true` if the provided date matches today's date, and `false` otherwise.
 *
 * @param {string} date - The date string in the format 'yyy-mm-dd' (e.g., '2024-08-20').
 * @returns {boolean} `true` if the provided date is today's date, `false` otherwise.
 *
 * @example
 * const isToday = getIsToday('2024-08-20');
 * console.log(isToday); // Output will depend on whether the provided date is today's date.
 */

export const getIsToday = (date: string): boolean => {
   const newDate = getDateFromString(date);
   const today = new Date();
   return (
      today.getDate() === newDate.getDate() &&
      today.getMonth() === newDate.getMonth() &&
      today.getFullYear() === newDate.getFullYear()
   );
};
