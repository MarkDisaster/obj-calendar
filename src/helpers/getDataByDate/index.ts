import { Data } from '@/helpers/getDataByDate/interfaces';

// Default mock data to be returned when no matching date is found.
const defaultMockData: Data = {
   date: '',
   data: [],
};

/**
 * Finds a data entry by its date from an array of data entries.
 *
 * This function searches through the provided array of `Data` objects to find an entry
 * that matches the specified date. If no matching entry is found, it returns a default
 * mock data object.
 *
 * @param {string} date - The date to search for, in ISO format (e.g., '2024-01-01').
 * @param {Data[]} dataArray - An array of `Data` objects to search through.
 * @returns {Data} The `Data` object that matches the given date, or `defaultMockData` if no match is found.
 *
 * @example
 * const result = findByDate('2024-01-01', [
 *   { date: '2024-01-01', data: [{ Time: '14:00', Capacity: 10, OriginalCapacity: 20, DateISO: '2024-08-20T23:00' }] },
 *   { date: '2024-01-02', data: [{ Time: '15:00', Capacity: 5, OriginalCapacity: 15, DateISO: '2024-08-20T23:00' }] }
 * ]);
 * console.log(result);
 * // Output: { date: '2024-01-01', data: [ { Time: '14:00', Capacity: 10, OriginalCapacity: 20, DateISO: '2024-08-20T23:00' } ] }
 */
export const findByDate = (date: string, dataArray: Data[]): Data => {
   return dataArray.find((item) => item.date === date) || defaultMockData;
};
