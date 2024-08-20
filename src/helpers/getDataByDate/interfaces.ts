/**
 * Represents the details of a specific time slot.
 *
 * @interface MockData
 */
interface MockData {
   /**
    * The time of the slot in `HH:mm` format (e.g., '14:00').
    * @type {string}
    */
   Time: string;

   /**
    * The current available capacity for this time slot.
    * @type {number}
    */
   Capacity: number;

   /**
    * The original capacity of the time slot before any adjustments.
    * @type {number}
    */
   OriginalCapacity: number;

   /**
    * The date in format associated with this time slot (e.g., '2024-08-20T23:00').
    * @type {string}
    */
   DateISO: string;
}

/**
 * Represents a collection of time slots for a specific date.
 *
 * @interface Data
 */
export interface Data {
   /**
    * The date associated with the data collection in ISO 8601 format (e.g., '2024-01-01').
    * @type {string}
    */
   date: string;

   /**
    * An array of `MockData` objects representing time slots available for the given date.
    * @type {MockData[]}
    */
   data: MockData[];
}
