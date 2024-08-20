/**
 * Represents a day with a formatted date and a date string.
 *
 * This interface is used to define the structure of an object that holds information about a specific day,
 * including both a formatted string and an ISO date string.
 *
 * @interface
 */
export interface GeneratedDays {
   /**
    * The ISO 8601 date string for the day (e.g., '2024-08-20').
    * This is typically used for date comparisons and storage.
    *
    * @type {string}
    */
   date: string;

   /**
    * The formatted date string for display purposes (e.g., 'Dnes 20.08.').
    * This is typically used for displaying the date in a user-friendly format.
    *
    * @type {string}
    */
   formattedDate: string;
}
