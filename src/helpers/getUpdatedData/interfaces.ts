/**
 * Represents a single time slot with its capacity information and associated date.
 *
 * @interface MockData
 */
export interface MockData {
   /**
    * The time of the slot in `HH:mm` format (e.g., '10:00').
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
    * The date and time associated with this time slot in ISO 8601 format (e.g., '2024-01-01T10:00').
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
    * The date for which the time slot data is provided, formatted in ISO 8601 format (e.g., '2024-01-01').
    * @type {string}
    */
   date: string;

   /**
    * An array of `MockData` objects representing time slots available on the specified date.
    * @type {MockData[]}
    */
   data: MockData[];
}
