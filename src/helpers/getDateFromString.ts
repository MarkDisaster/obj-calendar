/**
 * Converts a date string in the format 'dd.mm.yyyy' to a JavaScript `Date` object.
 *
 * The function takes a date string with the format `dd.mm.yyyy`, splits it into day, month, and year components,
 * and creates a `Date` object with those values. Note that months in JavaScript `Date` are zero-based (i.e., January is 0, February is 1, etc.).
 *
 * @param {string} date - The date string in the format 'dd.mm.yyyy' (e.g., '31.12.2024').
 * @returns {Date} A `Date` object representing the provided date.
 *
 * @example
 * const date = getDateFromString('31.12.2024');
 * console.log(date); // Output: Tue Dec 31 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
 */
export const getDateFromString = (date: string): Date => {
   const [day, month, year] = date.split('.').map(Number);
   return new Date(year, month - 1, day);
};
