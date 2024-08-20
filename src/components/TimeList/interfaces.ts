/**
 * Properties for the TimeList component.
 *
 * @interface TimeListProps
 */
export interface TimeListProps {
   /**
    * An array of time slot objects, each representing a specific time slot with its details.
    * @type {Array<{
    *   Time: string; // The time of the slot in 'HH:mm' format (e.g., '14:30').
    *   Capacity: number; // The current available capacity for this time slot.
    *   OriginalCapacity: number; // The original capacity of the time slot before any adjustments.
    *   DateISO: string; // The date in format (e.g., '2024-08-20T23:00').
    * }>}
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
