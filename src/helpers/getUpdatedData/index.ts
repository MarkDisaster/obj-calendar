import { Data } from '@/helpers/getUpdatedData/interfaces';

/**
 * Updates the capacity of time slots in the provided data array based on the selected date and timeslot activity.
 *
 * This function modifies the capacity of time slots in the `data` array based on the provided `dateISO` and `prevSelectedDate`.
 * If a time slot is being selected (`dateISO`) and it was previously selected (`prevSelectedDate`), the function updates
 * the capacity accordingly. If a time slot is no longer selected, its capacity is incremented back.
 *
 * @param {string} dateISO - The ISO 8601 formatted date and time of the currently selected time slot (e.g., '2024-01-01T10:00').
 * @param {string} prevSelectedDate - The ISO 8601 formatted date and time of the previously selected time slot (e.g., '2023-12-31T10:00').
 * @param {Data[]} data - An array of `Data` objects representing the time slots with their capacities.
 * @param {boolean} timeslotActive - Indicates whether the current timeslot is active or not.
 * @returns {Data[]} A new array of `Data` objects with updated time slot capacities.
 *
 * @example
 * const data = [
 *   {
 *     date: '2024-01-01',
 *     data: [
 *       { Time: '10:00', Capacity: 5, OriginalCapacity: 10, DateISO: '2024-08-20T10:00' },
 *       { Time: '15:00', Capacity: 3, OriginalCapacity: 10, DateISO: '2024-08-20T15:00' }
 *     ]
 *   }
 * ];
 * const updatedData = getUpdatedData('2024-01-01T10:00', '2023-12-31T15:00', data, true);
 * console.log(updatedData);
 * // Output: Data array with updated capacities based on the provided dates and timeslot activity.
 */

export const getUpdatedData = (
   dateISO: string,
   prevSelectedDate: string,
   data: Data[],
   timeslotActive: boolean,
): Data[] => {
   const updatedDataArray = data.map((dataItem) => {
      const updatedDataItems = dataItem.data.map((item) => {
         if (item.DateISO === dateISO && item.DateISO !== prevSelectedDate) {
            return {
               ...item,
               Capacity: item.Capacity - 1,
            };
         } else if (
            item.DateISO === prevSelectedDate &&
            item.DateISO !== dateISO
         ) {
            return {
               ...item,
               Capacity: item.Capacity + 1,
            };
         } else if (
            item.DateISO === prevSelectedDate &&
            item.DateISO === dateISO &&
            timeslotActive === true
         ) {
            return {
               ...item,
               Capacity: item.Capacity + 1,
            };
         }
         return item;
      });

      return {
         ...dataItem,
         data: updatedDataItems,
      };
   });

   return updatedDataArray;
};
