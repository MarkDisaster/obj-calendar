import { Data } from '@/helpers/getUpdatedData/interfaces';

/**
 * Filters the provided data to include only time slots that are in the future.
 *
 * This function takes a `Data` object, filters its `data` array to include only those
 * time slots where the `DateISO` is greater than the current date and time.
 * It returns a new `Data` object containing the original date and the filtered array of future time slots.
 *
 * @param {Data} props - The data object containing a date and an array of `MockData` time slots.
 * @param {string} props.date - The date associated with the data in ISO 8601 format (e.g., '2024-01-01').
 * @param {MockData[]} props.data - An array of `MockData` objects representing time slots.
 * @returns {Data} A new `Data` object with the same date and a filtered array containing only future time slots.
 *
 * @example
 * const data = {
 *   date: '2024-01-01',
 *   data: [
 *     { Time: '10:00', Capacity: 5, OriginalCapacity: 10, DateISO: '2024-08-20T10:00' },
 *     { Time: '15:00', Capacity: 3, OriginalCapacity: 10, DateISO: '2024-08-20T15:00' },
 *     { Time: '20:00', Capacity: 0, OriginalCapacity: 10, DateISO: '2024-08-20T20:00' }
 *   ]
 * };
 *
 * const futureData = getDatabyTime(data);
 * console.log(futureData);
 * // Output might include only time slots with DateISO greater than the current date and time
 */

export const getDatabyTime = (props: Data): Data => {
   const currentDate = new Date();

   const upcomingData = props.data.filter((mockData) => {
      const mockDate = new Date(mockData.DateISO);
      return mockDate > currentDate;
   });

   return {
      date: props.date,
      data: upcomingData,
   };
};
