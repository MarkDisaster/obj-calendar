/**
 * Represents a time slot with its capacity information.
 *
 * @interface Data
 */
export interface Data {
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
}

/**
 * Extends the `Data` interface to include an formatted date string (e.g., '2024-01-01T10:00').
 *
 * @interface DataDateISO
 * @extends {Data}
 */
export interface DataDateISO extends Data {
   /**
    * The date and time associated with this time slot in format (e.g., '2024-01-01T10:00').
    * @type {string}
    */
   DateISO: string;
}

/**
 * Represents a page of paginated data, including the date and a list of time slot details.
 *
 * @interface PaginatedData
 */
export interface PaginatedData {
   /**
    * The date for which the data is provided, formatted in ISO 8601 format (e.g., '2024-01-01').
    * @type {string}
    */
   date: string;

   /**
    * An array of `DataDateISO` objects representing time slots available on the specified date.
    * @type {DataDateISO[]}
    */
   data: DataDateISO[];
}
