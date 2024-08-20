import { getDateFromString } from '@/helpers/getDateFromString';

/**
 * Checks if the provided date string corresponds to tomorrow's date.
 *
 * The function converts the provided date string into a `Date` object, calculates tomorrow's date,
 * and then compares the two dates. It returns `true` if the provided date matches tomorrow's date, and `false` otherwise.
 *
 * @param {string} date - The date string in the format 'yyyy-mm-dd' (e.g., '22024-08-20').
 * @returns {boolean} `true` if the provided date is tomorrow's date, `false` otherwise.
 *
 * @example
 * const isTomorrow = getIsTomorrow('2024-08-20');
 * console.log(isTomorrow); // Output will depend on whether the provided date is tomorrow's date.
 */

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
