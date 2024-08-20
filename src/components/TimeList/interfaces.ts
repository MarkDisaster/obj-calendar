/**
 * Properties for the TimeList component.
 *
 * @interface TimeListProps
 */
export interface TimeListProps {
   /**
    * Represents a time slot.
    * @typedef {Object} TimeSlot
    * @property {string} Time - The time of the slot in 'HH:mm' format (e.g., '14:30').
    * @property {number} Capacity - The current available capacity for this time slot.
    * @property {number} OriginalCapacity - The original capacity of the time slot before any adjustments.
    * @property {string} DateISO - The date in ISO format (e.g., '2024-08-20T23:00').
    */

   /**
    * An array of time slot objects, each representing a specific time slot with its details.
    * @type {Array<TimeSlot>}
    */
   data: Array<{
      Time: string;
      Capacity: number;
      OriginalCapacity: number;
      DateISO: string;
   }>;

   /**
    * The selected date for which time slots are displayed.
    * @type {string}
    * @example '2024-01-01'
    */
   date: string;

   /**
    * The currently active time slot.
    * @type {string}
    * @example '14:30'
    */
   activeTime: string;

   /**
    * Callback function triggered when a time slot is selected.
    * @param {string} time - The time of the selected slot.
    * @param {boolean} timeslotActive - Indicates whether the selected slot is currently active.
    * @returns {void}
    */
   onSelectTime: (time: string, timeslotActive: boolean) => void;
}
