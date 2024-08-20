/**
 * Represents a single day's information with a date and a formatted display string.
 *
 * @interface GeneratedDays
 */
export interface GeneratedDays {
   /**
    * The date in ISO 8601 format (e.g., '2024-01-01').
    * This format is used for precise date representation and sorting.
    * @type {string}
    */
   date: string;

   /**
    * A human-readable formatted string representing the date.
    * This might include special labels like "Today" or "Tomorrow" for the current or next day,
    * or a short form of the day and date for other days (e.g., 'Mon 1.1.').
    * @type {string}
    */
   formattedDate: string;
}
