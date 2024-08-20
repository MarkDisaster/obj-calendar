import { ITEMS_PER_PAGE } from '@/helpers/getReplicatedData/constants';
import {
   Data,
   DataDateISO,
   PaginatedData,
} from '@/helpers/getReplicatedData/interfaces';

/**
 * Replicates and paginates the provided mock data for a specified number of days.
 *
 * This function takes an array of `Data` objects and replicates them for the next `times` number of days.
 * Each item in the `mockData` array is duplicated for each day, with the `DateISO` field updated to reflect the new date.
 * The replicated data is then paginated into chunks of size defined by `ITEMS_PER_PAGE`.
 *
 * @param {Data[]} mockData - An array of `Data` objects to be replicated. Each object should include time slot details.
 * @param {number} times - The number of days to replicate the data for. Must be a positive integer.
 * @returns {PaginatedData[]} An array of `PaginatedData` objects, each representing a page of data:
 *   - `date`: The date of the page in ISO 8601 format (e.g., '2024-01-01').
 *   - `data`: An array of `DataDateISO` objects for that page.
 *
 * @example
 * const mockData = [
 *   { Time: '10:00', Capacity: 5, OriginalCapacity: 10, DateISO: '2024-01-01T10:10:00' },
 *   { Time: '15:00', Capacity: 3, OriginalCapacity: 10, DateISO: '2024-01-01T15:15:00' }
 * ];
 * const times = 2;
 * const result = getReplicatedData(mockData, times);
 * console.log(result);
 * // Output might include paginated data across 2 days, with each page containing up to ITEMS_PER_PAGE entries.
 */

export const getReplicatedData = (
   mockData: Data[],
   times: number,
): PaginatedData[] => {
   const replicatedData: DataDateISO[] = [];
   for (let i = 0; i < times; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const formattedDate = currentDate.toISOString().split('T')[0];

      mockData.forEach((item) => {
         replicatedData.push({
            ...item,
            DateISO: `${formattedDate}T${item.Time}`,
         });
      });
   }

   const paginatedData: PaginatedData[] = [];
   const totalPages = Math.ceil(replicatedData.length / ITEMS_PER_PAGE);

   for (let page = 1; page <= totalPages; page++) {
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = Math.min(
         startIndex + ITEMS_PER_PAGE,
         replicatedData.length,
      );
      const pageData = replicatedData.slice(startIndex, endIndex);

      const date = pageData[0]?.DateISO.split('T')[0];

      paginatedData.push({
         date: date ?? '',
         data: pageData,
      });
   }

   return paginatedData;
};
