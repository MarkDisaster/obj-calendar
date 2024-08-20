import { Setter } from 'solid-js';

/**
 * Represents a single day in the generated days list.
 *
 * @interface GeneratedDays
 */
export interface GeneratedDays {
   /**
    * The date in ISO 8601 format (e.g., '2024-01-01').
    * @type {string}
    */
   date: string;

   /**
    * The formatted date as a human-readable string (e.g., 'čt 22.8.').
    * @type {string}
    */
   formattedDate: string;
}

/**
 * Properties for the NavigationBar component.
 *
 * @interface NavigationBarProps
 */
export interface NavigationBarProps {
   /**
    * The total number of pages available.
    * Used to determine button states and control pagination.
    * @type {number}
    */
   page: number;

   /**
    * Function to update the current page number.
    * @param {number} page - The new page number.
    * @returns {void}
    */
   setNavigationPage: Setter<number>;

   /**
    * The currently selected date in ISO 8601 format.
    * @type {string}
    */
   selectedDate: string;

   /**
    * Function to update the selected date.
    * @param {string} date - The new selected date.
    * @returns {void}
    */
   setSelectedDate: Setter<string>;

   /**
    * The current page number for navigation purposes.
    * @type {number}
    */
   navigationPage: number;

   /**
    * An array of `GeneratedDays` objects representing the days to paginate.
    * @type {GeneratedDays[]}
    */
   daysGeneratedAhead: GeneratedDays[];
}
