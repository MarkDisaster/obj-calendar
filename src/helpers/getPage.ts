import { GeneratedDays } from '@/helpers/getGeneratedDaysAhedFromNow/interfaces';

/**
 * Returns a subset of an array of `GeneratedDays` for a specific page of results.
 *
 * This function divides the input array into pages and returns the items for the specified page.
 *
 * @param {GeneratedDays[]} array - The array of `GeneratedDays` objects to paginate.
 * @param {number} page - The page number to retrieve, with 1 representing the first page.
 * @param {number} perPage - The number of items to display per page.
 * @returns {GeneratedDays[]} A subset of the input array corresponding to the requested page.
 *
 * @example
 * // Example usage:
 * const days: GeneratedDays[] = [
 *   { date: '2024-01-01', formattedDate: 'Dnes 20.8.' },
 *   { date: '2024-01-02', formattedDate: 'Zítra 21.8.' },
 *   { date: '2024-01-03', formattedDate: 'čt 22.8.' },
 *   // ... more GeneratedDays items
 * ];
 * const page = 1;
 * const perPage = 2;
 * const result = getPage(days, page, perPage);
 * // Output: [
 * //   { date: '2024-01-01', formattedDate: 'čt 22.8.' },
 * //   { date: '2024-01-02', formattedDate: 'čt 22.8.' }
 * // ]
 */

export const getPage = (
   array: GeneratedDays[],
   page: number,
   perPage: number,
): GeneratedDays[] => {
   const startIndex = perPage * (page - 1);
   const endIndex = Math.min(startIndex + perPage, array.length);

   return array.slice(startIndex, endIndex);
};
